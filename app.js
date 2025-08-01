const port = process.env.PORT
if(process.env.NODE_ENV != "production"){
    require('dotenv').config();
}  

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require("passport-local");
const User = require('./models/user.js');


const dbUrl = process.env.ATLASDB_URL;

main()
.then(() => {
    console.log("connected to DB");
})
.catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(dbUrl);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended : true}));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));


const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto:{
        secret: process.env.SECRET,
    },
    touchAfter: 24*3600,
});

store.on("error", () => {
    console.log("ERROR in MONGO SESSION STORE", err);
});

const sessionOptions = {
    store,
    secret : process.env.SECRET,
    resave: false,
    saveUninitialized : true,
    cookie : { //Setting the expiry date and maxAge of cookie to store information
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000, // (In milliseconds) time period of a week from today
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    },
};

app.get("/", (req, res) => {
    res.redirect("/listings");
});

app.use(session(sessionOptions));
app.use(flash());  // In router.post, in listing.js

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.success = req.flash("success"); // success variable stored boilerplate using flash.ejs
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
})

// app.get("/demoUser", async(req, res) => {
//     let fakeUser = new User({
//         email : "st@gmail.com",
//         username : "delta-support",
//     });
//     let registeredUser = await User.register(fakeUser, "hello-world");
//     res.send(registeredUser);
// });

// Listings routes
app.use("/listings", listingRouter);

// Reviews routes
app.use("/listings/:id/reviews", reviewRouter);

// User route
app.use("/", userRouter);

/*This is to throw error to any route that has not been defined but not working*/
// app.all("*", (req, res, next) => {
//     res.status(404).send("Page Not Found");
// });      However below does the same function
app.use((req, res, next) => {
    res.status(404).send("Page Not Found"); // Or render a 404 page
});


app.use((err, req, res, next) => {
    let { statusCode = 500, message="Something Went Wrong" } = err;
    res.status(statusCode).render("listings/error.ejs",{message});
    //res.status(statusCode).send(message);
});

// Starting the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const User = require("../models/user.js");

module.exports.renderSignUpForm = (req, res) => {
    res.render("users/signup.ejs");
};

module.exports.signUp = async(req, res, next) => {
    try{
        let{username, email, password} = req.body;
        const newUser = new User({email, username});
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);
        // 1. Determine the redirect URL with a fallback
        let redirectUrl = res.locals.redirectUrl || '/listings'; // Default to /listings (or your app's main page)

        // 2. Clear the redirectUrl from the session after it's been captured
        // This prevents stale redirects on subsequent logins/signups
        if (req.session.redirectUrl) { // Check if it exists before deleting
            delete req.session.redirectUrl;
            console.log("Cleared req.session.redirectUrl"); // For debugging
        }
        req.login(registeredUser, (err) => {
        if(err){
            return next(err);
        }
        req.flash("success", "Welcome to wanderlust!");
        res.redirect(redirectUrl);
    });
    }
    catch(e){
        req.flash("error", e.message);
        res.redirect("/signup");
    }
};

module.exports.renderLoginForm = (req, res) => {
    res.render("users/login.ejs");
};

module.exports.login = async (req, res) => {
        req.flash("success", "Welcome back to wanderlust, You're logged in!");
        let redirectUrl = res.locals.redirectUrl || "/listings";
        res.redirect(redirectUrl);
};

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if(err) {
            return next(err);
        }
        req.flash("success", "You are logged out now!");
        res.redirect("/listings");
    })
};
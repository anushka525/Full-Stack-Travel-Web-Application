const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email:{
        type : String,
        required : true,
    },
});
// Username and password would automaticaly be set up by passport by following plugin
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    _id: Number,
    Email:String,
    password:String,
    data: Object,
});
module.exports = mongoose.model("User", userSchema);

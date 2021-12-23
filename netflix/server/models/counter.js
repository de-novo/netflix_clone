import mongoose from "mongoose";
const counterSchema = new mongoose.Schema({
    _id: Number,
    name:String,
    count:Number
});
const Counter = mongoose.model("Counter", counterSchema);
export { Counter }
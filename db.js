const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.ObjectId;

const userSchema = new Schema({
    email: { type: String, unique: true },
    password: String,
    firstName: String
})

const todoSchema = new Schema({
    title: String,
    status: Boolean,
    userId: ObjectId
})

const UserModel = mongoose.model("User", userSchema);
const TodoModel = mongoose.model("Todo", todoSchema);

module.exports = {
    UserModel,
    TodoModel
}

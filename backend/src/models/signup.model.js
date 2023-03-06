const { Schema, model } = require("mongoose");

const AuthSchema = new Schema({
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String },
    phone: { type: Number, unique: true },
    role: {
        type: String,
        enum: ["User", "Admin", "Employee"],
        default: "User"
    },
    age: String,
    gender: String
});

const Auth = model("Auth", AuthSchema);

module.exports = Auth;
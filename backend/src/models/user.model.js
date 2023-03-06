const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
    {
        name: String,
        email: { type: String, required: true, unquie: true },
        password: { type: String, required: true },
        address: { type: String },
        phone: Number,
        role: {
            type: String,
            enum: ["User", "Employee", "Admin"],
            default: "User",
        },
        age: String,
        Gender: String,
    },
    { versionKey: false, timestamps: true }
);

const UserModel = model("user", UserSchema);

module.exports = UserModel;
"use strict";
exports.__esModule = true;
exports.UserSchema = void 0;
var mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    // rigester
    name: { require: [true, "user must enter"], type: String },
    password: { require: true, type: String },
    email: { require: true, type: String, unique: true },
    // usercard
    role: { type: String, "enum": ["admin", "user"], "default": "user" },
    subscribed: { type: Boolean, "default": false },
    age: { type: Number },
    gender: { type: String },
    location: { type: String },
    height: { type: Number },
    kids: { type: String },
    smoking: { type: String },
    education: { type: String },
    job: { type: String },
    relationship: { type: String },
    info: { type: String },
    religious: { type: String }
});
var UserModel = mongoose_1["default"].model("users", exports.UserSchema);
exports["default"] = UserModel;

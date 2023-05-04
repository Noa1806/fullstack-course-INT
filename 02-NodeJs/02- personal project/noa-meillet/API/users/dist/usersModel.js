"use strict";
exports.__esModule = true;
exports.UserSchema = void 0;
var mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    nameOfBride: { require: true, type: String },
    nameOfGroom: { require: true, type: String },
    weddingDate: { require: true, type: Date },
    username: { require: true, type: String },
    password: { require: true, type: String }
});
var UserModel = mongoose_1["default"].model("users", exports.UserSchema);
exports["default"] = UserModel;

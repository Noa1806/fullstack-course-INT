"use strict";
exports.__esModule = true;
exports.GuestSchema = void 0;
var mongoose_1 = require("mongoose");
exports.GuestSchema = new mongoose_1.Schema({
    userId: { require: true, type: String },
    firstName: { require: true, type: String },
    lastName: { require: true, type: String },
    phoneNumber: { require: true, type: String },
    numberOfGuests: { require: true, type: Number },
    guestType: { require: true, type: String }
});
var GuestModel = mongoose_1["default"].model("guests", exports.GuestSchema);
exports["default"] = GuestModel;

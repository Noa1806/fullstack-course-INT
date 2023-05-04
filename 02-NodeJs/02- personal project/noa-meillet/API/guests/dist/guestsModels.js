"use strict";
exports.__esModule = true;
exports.GuestSchema = exports.GuestType = void 0;
var mongoose_1 = require("mongoose");
var GuestType;
(function (GuestType) {
    GuestType["BRIDE_FAMILY"] = "bride family";
    GuestType["BRIDE_FRIENDS"] = "bride friends";
    GuestType["GROOM_FAMILY"] = "groom family";
    GuestType["GROOM_FRIENDS"] = "groom friends";
})(GuestType = exports.GuestType || (exports.GuestType = {}));
exports.GuestSchema = new mongoose_1.Schema({
    firstName: { require: true, type: String },
    lastName: { require: true, type: String },
    phoneNumber: { require: true, type: String },
    NumberOfGuests: { require: true, type: Number },
    GuestType: {
        type: String,
        "enum": GuestType,
        "default": GuestType.BRIDE_FAMILY
    }
});
var GuestModel = mongoose_1["default"].model("guests", exports.GuestSchema);
exports["default"] = GuestModel;

"use strict";
exports.__esModule = true;
exports.PrefferanceSchema = void 0;
var mongoose_1 = require("mongoose");
;
exports.PrefferanceSchema = new mongoose_1.Schema({
    userId: { index: true, type: String, unique: true },
    minHeight: { require: true, type: Number },
    maxHeight: { require: true, type: Number },
    minAge: { require: true, type: Number },
    maxAge: { require: true, type: Number },
    gender: { require: true, type: String },
    kids: { require: true, type: String },
    smoking: { require: true, type: String },
    education: { require: true, type: String },
    relationship: { require: true, type: String },
    religious: { require: true, type: String }
});
var PrefferanceModel = mongoose_1["default"].model("prefferances", exports.PrefferanceSchema);
exports["default"] = PrefferanceModel;

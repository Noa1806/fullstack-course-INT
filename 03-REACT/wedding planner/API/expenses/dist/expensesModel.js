"use strict";
exports.__esModule = true;
exports.ExpenseSchema = exports.ExpenseCategory = void 0;
var mongoose_1 = require("mongoose");
var ExpenseCategory;
(function (ExpenseCategory) {
    ExpenseCategory["BRIDE"] = "bride";
    ExpenseCategory["GROOM"] = "groom";
    ExpenseCategory["CEREMONY"] = "ceremony";
    ExpenseCategory["PARTY"] = "party";
    ExpenseCategory["OTHER"] = "other";
})(ExpenseCategory = exports.ExpenseCategory || (exports.ExpenseCategory = {}));
exports.ExpenseSchema = new mongoose_1.Schema({
    userId: { unique: true, index: true, require: true, type: String },
    name: { require: true, type: String },
    supplier: { require: true, type: String },
    cost: { require: true, type: Number },
    advancePayement: { require: true, type: Number },
    leftToPay: { type: Number },
    expenseCategory: {
        type: String,
        "enum": ExpenseCategory,
        "default": ExpenseCategory.OTHER
    }
});
var ExpenseModel = mongoose_1["default"].model("expenses", exports.ExpenseSchema);
exports["default"] = ExpenseModel;

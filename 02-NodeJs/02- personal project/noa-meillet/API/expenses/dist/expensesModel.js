"use strict";
exports.__esModule = true;
exports.ExpenseSchema = exports.expenseCategory = void 0;
var mongoose_1 = require("mongoose");
var expenseCategory;
(function (expenseCategory) {
    expenseCategory["WEDDING"] = "wedding";
    expenseCategory["HENNA"] = "henna";
    expenseCategory["SHABBAT_HATAN"] = "shabbat hatan";
    expenseCategory["OTHER"] = "other";
})(expenseCategory = exports.expenseCategory || (exports.expenseCategory = {}));
exports.ExpenseSchema = new mongoose_1.Schema({
    category: { require: true, type: String },
    name: { require: true, type: String },
    supplier: { require: true, type: String },
    cost: { require: true, type: Number },
    advancePayement: { require: true, type: Number },
    expenseCategory: {
        type: String,
        "enum": expenseCategory,
        "default": expenseCategory.OTHER
    }
});
var ExpenseModel = mongoose_1["default"].model("expenses", exports.ExpenseSchema);
exports["default"] = ExpenseModel;

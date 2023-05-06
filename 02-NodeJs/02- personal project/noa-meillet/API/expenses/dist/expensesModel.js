"use strict";
exports.__esModule = true;
exports.UserExpenseModel = exports.UserExpenseSchema = exports.ExpenseSchema = exports.ExpenseCategory = void 0;
var mongoose_1 = require("mongoose");
var usersModel_1 = require("../users/usersModel");
var ExpenseCategory;
(function (ExpenseCategory) {
    ExpenseCategory["WEDDING"] = "wedding";
    ExpenseCategory["HENNA"] = "henna";
    ExpenseCategory["SHABBAT_HATAN"] = "shabbat hatan";
    ExpenseCategory["OTHER"] = "other";
})(ExpenseCategory = exports.ExpenseCategory || (exports.ExpenseCategory = {}));
exports.ExpenseSchema = new mongoose_1.Schema({
    category: { require: true, type: String },
    name: { require: true, type: String },
    supplier: { require: true, type: String },
    cost: { require: true, type: Number },
    advancePayement: { require: true, type: Number },
    expenseCategory: {
        type: String,
        "enum": ExpenseCategory,
        "default": ExpenseCategory.OTHER
    }
});
exports.UserExpenseSchema = new mongoose_1.Schema({
    user: usersModel_1.UserSchema,
    guest: exports.ExpenseSchema
});
exports.UserExpenseModel = mongoose_1["default"].model("user-expenses", exports.UserExpenseSchema);
var ExpenseModel = mongoose_1["default"].model("expenses", exports.ExpenseSchema);
exports["default"] = ExpenseModel;

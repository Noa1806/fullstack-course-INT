"use strict";
exports.__esModule = true;
exports.ExpenseSchema = void 0;
var mongoose_1 = require("mongoose");
exports.ExpenseSchema = new mongoose_1.Schema({
    userId: { require: true, type: String },
    name: { require: true, type: String },
    supplier: { require: true, type: String },
    cost: { require: true, type: Number },
    advancePayement: { require: true, type: Number },
    expenseCategory: { require: true, type: String }
});
var ExpenseModel = mongoose_1["default"].model("expenses", exports.ExpenseSchema);
exports["default"] = ExpenseModel;

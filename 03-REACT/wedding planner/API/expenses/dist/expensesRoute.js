"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var expensesControler_1 = require("./expensesControler");
router
    .post("/add-expense", expensesControler_1.addExpense)["delete"]('/delete-expense', expensesControler_1.deleteExpense)
    .patch('/update-expense-type', expensesControler_1.updateExpenseType);
exports["default"] = router;

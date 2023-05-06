import express from "express";
const router = express.Router();
import {
  addExpense,
  deleteExpense,
  updateExpenseType
} from "./expensesControler";

router
  .post("/add-expense", addExpense)
  .delete('/delete-expense',deleteExpense)
  .patch('/update-expense-type',updateExpenseType);

export default router;
import express from "express";
const router = express.Router();
import {
  addExpense,
  deleteExpense,
  updateExpenseType,
  getExpensesOfUser
} from "./expensesControler";

router
  .post("/add-expense", addExpense)
  .delete('/delete-expense',deleteExpense)
  .get('/get-expenses', getExpensesOfUser)
  .patch('/update-expense-type',updateExpenseType);

export default router;
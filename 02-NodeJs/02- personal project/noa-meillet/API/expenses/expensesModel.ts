import mongoose, { Schema } from "mongoose";
import { UserSchema } from "../users/usersModel";

interface Expense {
  // public uid: string = uuid();
  userId: string;
  name: string;
  supplier: string;
  cost: number;
  advancePayement: number;
}

export enum ExpenseCategory {
    WEDDING = "wedding",
    HENNA = "henna",
    SHABBAT_HATAN = "shabbat hatan",
    OTHER = "other",
  }

export const ExpenseSchema = new Schema({
    userId: {unique:true, index:true, require:true, type:String},
    name: {require:true, type:String},
    supplier: {require:true, type:String},
    cost: {require:true, type:Number},
    advancePayement: {require:true, type:Number},
    leftToPay: {type:Number},
    expenseCategory: {
        type: String,
        enum: ExpenseCategory,
        default: ExpenseCategory.OTHER,
      },
    });


const ExpenseModel = mongoose.model("expenses", ExpenseSchema);

export default ExpenseModel;
import mongoose, { Schema } from "mongoose";

interface Expense {
  // public uid: string = uuid();
  category: string;
  name: string;
  supplier: string;
  cost: number;
  advancePayement: number;
}

export enum expenseCategory {
    WEDDING = "wedding",
    HENNA = "henna",
    SHABBAT_HATAN = "shabbat hatan",
    OTHER = "other",
  }

export const ExpenseSchema = new Schema({
    category: {require:true, type:String},
    name: {require:true, type:String},
    supplier: {require:true, type:String},
    cost: {require:true, type:Number},
    advancePayement: {require:true, type:Number},
    expenseCategory: {
        type: String,
        enum: expenseCategory,
        default: expenseCategory.OTHER,
      },
    });

const ExpenseModel = mongoose.model("expenses", ExpenseSchema);

export default ExpenseModel;
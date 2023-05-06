import mongoose, { Schema } from "mongoose";
import { UserSchema } from "../users/usersModel";

interface Expense {
  // public uid: string = uuid();
  category: string;
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
    category: {require:true, type:String},
    name: {require:true, type:String},
    supplier: {require:true, type:String},
    cost: {require:true, type:Number},
    advancePayement: {require:true, type:Number},
    expenseCategory: {
        type: String,
        enum: ExpenseCategory,
        default: ExpenseCategory.OTHER,
      },
    });


export const UserExpenseSchema = new Schema({
  user:UserSchema,
  guest:ExpenseSchema
})  

export const UserExpenseModel = mongoose.model("user-expenses", UserExpenseSchema);


const ExpenseModel = mongoose.model("expenses", ExpenseSchema);

export default ExpenseModel;
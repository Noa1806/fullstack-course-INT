import mongoose, { Schema } from "mongoose";

export interface Expense {
  // public uid: string = uuid();
  userId: string;
  name: string;
  supplier: string;
  cost: number;
  advancePayement: number;
}

export enum ExpenseCategory {
    BRIDE = "bride",
    GROOM = "groom",
    CEREMONY = "ceremony",
    PARTY = "party",
    OTHER = "other"
  }

export const ExpenseSchema = new Schema({
    userId: {unique:true, index:true, require:true, type:String},
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


const ExpenseModel = mongoose.model<Expense>("expenses", ExpenseSchema);

export default ExpenseModel;
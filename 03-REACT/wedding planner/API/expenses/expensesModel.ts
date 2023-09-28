import mongoose, { Schema } from "mongoose";

export interface Expense {
  // public uid: string = uuid();
  userId: string;
  name: string;
  supplier: string;
  cost: number;
  advancePayement: number;
  expenseCategory:string;
}

export const ExpenseSchema = new Schema({
    userId: {require:true, type:String},
    name: {require:true, type:String},
    supplier: {require:true, type:String},
    cost: {require:true, type:Number},
    advancePayement: {require:true, type:Number},
    expenseCategory: {require:true, type: String},
    });


const ExpenseModel = mongoose.model<Expense>("expenses", ExpenseSchema);

export default ExpenseModel;
import mongoose, { Schema } from "mongoose";

export interface Prefferance {
  userId: String,
  minHeight: Number,
  maxHeight: Number,
  minAge: Number,
  maxAge: Number,
  gender: String,
  kids: String,
  smoking: String,
  education: String,
  relationship: String,
  religious: String
};

export const PrefferanceSchema = new Schema({
    userId: {index:true, type:String, unique:true},
    minHeight: {require:true, type:Number},
    maxHeight: {require:true, type:Number},
    minAge: {require:true, type:Number},
    maxAge: {require:true, type:Number},
    gender: {require:true, type:String},
    kids: {require:true, type:String},
    smoking: {require:true, type:String},
    education: {require:true, type:String},
    relationship: {require:true, type:String},
    religious: {require:true, type:String}
});


  const PrefferanceModel = mongoose.model<Prefferance>("prefferances", PrefferanceSchema);


export default PrefferanceModel;
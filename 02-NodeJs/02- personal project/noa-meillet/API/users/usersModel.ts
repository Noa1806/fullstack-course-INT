import mongoose, { Schema } from "mongoose";

interface User {
  // public uid: string = uuid();
  nameOfBride: string;
  nameOfGroom: string;
  WeddingDate: Date;
  username: string;
  password: string;
}

export const UserSchema = new Schema({
    nameOfBride: {require:true, type:String},
    nameOfGroom: {require:true, type:String},
    weddingDate: {require:true, type:Date},
    username: {require:true, type:String},
    password: {require:true, type:String}
})

const UserModel = mongoose.model("users", UserSchema);

export default UserModel;

import mongoose, { Schema } from "mongoose";

export interface User {
  nameOfBride: string;
  nameOfGroom: string;
  weddingDate: Date;
  email: string;
  username: string;
  password: string;
}

export const UserSchema = new Schema({
    nameOfBride: {require:true, type:String},
    nameOfGroom: {require:true, type:String},
    weddingDate: {require:true, type:Date},
    email: {require:true, type:String, unique:true},
    username: {require:true, type:String},
    password: {require:true, type:String}
})

const UserModel = mongoose.model<User>("users", UserSchema);

export default UserModel;

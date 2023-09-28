import mongoose, { Schema } from "mongoose";
import { UserSchema } from "../users/usersModel";


export interface Guest {
  // public uid: string = uuid();
  userId: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  numberOfGuests: number;
  guestType: string
}

export const GuestSchema = new Schema({
    userId: {require:true, type:String},
    firstName: {require:true, type:String},
    lastName: {require:true, type:String},
    phoneNumber: {require:true, type:String},
    numberOfGuests: {require:true, type:Number},
    guestType: {require:true, type: String},
    });


const GuestModel = mongoose.model<Guest>("guests", GuestSchema);

export default GuestModel;

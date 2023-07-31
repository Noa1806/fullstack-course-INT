import mongoose, { Schema } from "mongoose";
import { UserSchema } from "../users/usersModel";


export interface Guest {
  // public uid: string = uuid();
  userId: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  numberOfGuests: number;
}

export enum GuestType {
    BRIDE_FAMILY = "bride family",
    BRIDE_FRIENDS = "bride friends",
    GROOM_FAMILY = "groom family",
    GROOM_FRIENDS = "groom friends",
  }

export const GuestSchema = new Schema({
    userId: {unique:true, index:true, type:String},
    firstName: {require:true, type:String},
    lastName: {require:true, type:String},
    phoneNumber: {require:true, type:String},
    numberOfGuests: {require:true, type:Number},
    GuestType: {
        type: String,
        enum: GuestType,
        default: GuestType.BRIDE_FAMILY,
      },
    });


const GuestModel = mongoose.model<Guest>("guests", GuestSchema);

export default GuestModel;

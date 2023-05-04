import mongoose, { Schema } from "mongoose";

interface Guest {
  // public uid: string = uuid();
  firstName: string;
  lastName: string;
  phoneNumber: string;
  NumberOfGuests: number;
}

export enum GuestType {
    BRIDE_FAMILY = "bride family",
    BRIDE_FRIENDS = "bride friends",
    GROOM_FAMILY = "groom family",
    GROOM_FRIENDS = "groom friends",
  }

export const GuestSchema = new Schema({
    firstName: {require:true, type:String},
    lastName: {require:true, type:String},
    phoneNumber: {require:true, type:String},
    NumberOfGuests: {require:true, type:Number},
    GuestType: {
        type: String,
        enum: GuestType,
        default: GuestType.BRIDE_FAMILY,
      },
    });

const GuestModel = mongoose.model("guests", GuestSchema);

export default GuestModel;

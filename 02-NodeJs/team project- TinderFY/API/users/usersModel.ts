import mongoose, { Schema } from "mongoose"

export interface User {
    // regester
    name:String ,
    password: String ,
    email: String,

    // usercard
    role: String,
    subscribed:Boolean,
    age: Number,
    gender: String,
    location: String,
    height: Number,
    kids: String,
    smoking: String,
    education: String,
    job: String,
    relationship: String,
    info: String,
    religious: String
}

export const UserSchema = new Schema({
    // rigester
    name: { require: [true, "user must enter"], type: String },
    password: { require: true, type: String },
    email: { require: true, type: String, unique:true},

    // usercard
    role: {type:String, enum:["admin", "user"],default:"user"},
    subscribed:{type:Boolean, default:false},
    age: {type:Number},
    gender: {type:String},
    location: {type:String},
    height: {type:Number},
    kids: {type:String},
    smoking: {type:String},
    education: {type:String,},
    job: {type:String},
    relationship: {type:String},
    info: {type:String},
    religious: {type:String}
})


const UserModel = mongoose.model("users", UserSchema);




export default UserModel; 
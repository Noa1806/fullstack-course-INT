import mongoose from "mongoose";

const uri:string | undefined = process.env.MONGODB_URI;

if(uri){
mongoose.connect(uri)
.then(()=>{
    console.log(`DB CONNECT`)
})
}else {
    console.log("No URI to DB");
}


import express from "express";
const app = express();
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import * as dotenv from "dotenv";
dotenv.config();
import cookieParser from 'cookie-parser';
const uri: string | undefined = process.env.MONGODB_URI;

app.use(cookieParser())

if (uri) {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("DB connected!");
    })
    .catch((err) => console.log(err));
} else {
  console.log("No URI to DB");
}

app.use(bodyParser.json()); // This will parse JSON data in the request body


app.use(express.json());
app.use(express.static("./client"));
/*app.use(express.static("./client/loginPage"));*/


import usersRouter from './API/users/usersRoute';
app.use('/api/users', usersRouter);


import guestsRouter from './API/guests/guestsRoute';
app.use('/api/guests', guestsRouter);


import expensesRouter from './API/expenses/expensesRoute';
app.use('/api/expenses', expensesRouter);


app.listen(4000, () => {
  console.log("server listen on port 4000");
});

import express from "express";
const router = express.Router();
import {
  addUser,
  login
  //getUser
} from "./usersControler";

router
  .post("/add-user", addUser)
  .post('/login',login);
  //.get('/get-user',getUser);

export default router;
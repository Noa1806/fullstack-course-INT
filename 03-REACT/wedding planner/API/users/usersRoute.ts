import express from "express";
const router = express.Router();
import {
  addUser,
  login,
  logout,
  getUserById
  //getUser
} from "./usersControler";

router
  .post("/add-user", addUser)
  .post('/login',login)
  .get('/logout',logout)
  .get("/getUserById", getUserById);
  //.get('/get-user',getUser);

export default router;
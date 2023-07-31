import express from "express";
const router = express.Router();

import {
userLogin, 
addNewUser,
getAllUsers,
updateDetail,
cardUser,



} from "./usersControlls";

router
.get("/getusers", getAllUsers)
.post("/register", addNewUser)
.post("/login", userLogin)
.put("/update", updateDetail)
.post("/main", cardUser)

export default router
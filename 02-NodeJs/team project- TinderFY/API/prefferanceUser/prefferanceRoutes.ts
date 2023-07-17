import express from "express";
const router = express.Router();

import{
    addNewuserPrefferance,
    prefferanceUserCard
}from "./prefferanceControls";



router
.post("/addPrefferance", addNewuserPrefferance)
.post("/get-user-prefferance", prefferanceUserCard)


export default router;
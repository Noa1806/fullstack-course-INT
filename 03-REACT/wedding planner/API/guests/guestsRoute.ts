import express from "express";
const router = express.Router();
import {
  addGuest,
  deleteGuest,
  updateGuestType
} from "./guestsControler";

router
  .post("/add-guest", addGuest)
  .delete('/delete-guest',deleteGuest)
  .patch('/update-guest-type',updateGuestType);

export default router;
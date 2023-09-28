import express from "express";
const router = express.Router();
import {
  addGuest,
  deleteGuest,
  updateGuestType,
  getGuestsOfUser
} from "./guestsControler";

router
  .post("/add-guest", addGuest)
  .get("/get-guests", getGuestsOfUser)
  .delete('/delete-guest',deleteGuest)
  .patch('/update-guest-type',updateGuestType);

export default router;
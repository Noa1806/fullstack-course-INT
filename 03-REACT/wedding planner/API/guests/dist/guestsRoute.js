"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var guestsControler_1 = require("./guestsControler");
router
    .post("/add-guest", guestsControler_1.addGuest)
    .get("/get-guests", guestsControler_1.getGuestsOfUser)["delete"]('/delete-guest', guestsControler_1.deleteGuest)
    .patch('/update-guest-type', guestsControler_1.updateGuestType);
exports["default"] = router;

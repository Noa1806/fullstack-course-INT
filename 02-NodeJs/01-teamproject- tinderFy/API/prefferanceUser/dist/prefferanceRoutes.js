"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var prefferanceControls_1 = require("./prefferanceControls");
router
    .post("/addPrefferance", prefferanceControls_1.addNewuserPrefferance)
    .post("/get-user-prefferance", prefferanceControls_1.prefferanceUserCard);
exports["default"] = router;

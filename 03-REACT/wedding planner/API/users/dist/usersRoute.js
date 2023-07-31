"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var usersControler_1 = require("./usersControler");
router
    .post("/add-user", usersControler_1.addUser)
    .post('/login', usersControler_1.login);
//.get('/get-user',getUser);
exports["default"] = router;

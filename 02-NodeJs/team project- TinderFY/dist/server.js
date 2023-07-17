"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var dotenv = require("dotenv");
dotenv.config();
var cookie_parser_1 = require("cookie-parser");
app.use(express_1["default"].json());
require("./data/db");
app.use(cookie_parser_1["default"]());
// routes
var usersRoutes_1 = require("./API/users/usersRoutes");
app.use("/api/users", usersRoutes_1["default"]);
var prefferanceRoutes_1 = require("./API/prefferanceUser/prefferanceRoutes");
app.use("/api/prefferanceUser", prefferanceRoutes_1["default"]);
app.use(express_1["default"].static("./public"));
app.use("/css", express_1["default"].static("./public/style/dist"));
app.listen(3000, function () {
    console.log("server listen at: 3000");
});

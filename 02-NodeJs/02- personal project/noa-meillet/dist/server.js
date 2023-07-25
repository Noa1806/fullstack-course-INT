"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var mongoose_1 = require("mongoose");
var body_parser_1 = require("body-parser");
var dotenv = require("dotenv");
dotenv.config();
var cookie_parser_1 = require("cookie-parser");
var uri = process.env.MONGODB_URI;
app.use(cookie_parser_1["default"]());
if (uri) {
    mongoose_1["default"]
        .connect(uri)
        .then(function () {
        console.log("DB connected!");
    })["catch"](function (err) { return console.log(err); });
}
else {
    console.log("No URI to DB");
}
app.use(body_parser_1["default"].json()); // This will parse JSON data in the request body
var usersRoute_1 = require("./API/users/usersRoute");
app.use('/api/users', usersRoute_1["default"]);
var guestsRoute_1 = require("./API/guests/guestsRoute");
app.use('/api/guests', guestsRoute_1["default"]);
var expensesRoute_1 = require("./API/expenses/expensesRoute");
app.use('/api/expenses', expensesRoute_1["default"]);
app.use(express_1["default"].json());
app.use(express_1["default"].static("./client"));
app.use(express_1["default"].static("./client/loginPage"));
app.listen(3000, function () {
    console.log('Server is running on port 3000');
});
app.listen(4000, function () {
    console.log("server listen on port 4000");
});

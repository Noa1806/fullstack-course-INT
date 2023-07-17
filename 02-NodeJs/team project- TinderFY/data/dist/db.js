"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var uri = process.env.MONGODB_URI;
if (uri) {
    mongoose_1["default"].connect(uri)
        .then(function () {
        console.log("DB CONNECT");
    });
}
else {
    console.log("No URI to DB");
}

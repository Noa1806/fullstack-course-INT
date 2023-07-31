"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.cardUser = exports.updateDetail = exports.getAllUsers = exports.userLogin = exports.addNewUser = void 0;
var usersModel_1 = require("./usersModel");
var jwt = require("jwt-simple");
var secret = process.env.JWT_SECRET;
var bcryptjs_1 = require("bcryptjs");
var salt = bcryptjs_1["default"].genSaltSync(10);
exports.addNewUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, email, password, hash, userLogin_1, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, name = _a.name, email = _a.email, password = _a.password;
                hash = bcryptjs_1["default"].hashSync(password, salt);
                return [4 /*yield*/, usersModel_1["default"].create({
                        name: name, email: email,
                        password: hash
                    })];
            case 1:
                userLogin_1 = _b.sent();
                console.log(userLogin_1);
                res.status(201).send({ ok: true });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _b.sent();
                if (error_1.code === 11000) {
                    res.status(409).send({ ok: false, error: "user already exists" });
                }
                console.error(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.userLogin = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, userLogin_2, token, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, email = _a.email, password = _a.password;
                password = bcryptjs_1["default"].hashSync(password, salt);
                return [4 /*yield*/, usersModel_1["default"].findOne({ email: email, password: password })];
            case 1:
                userLogin_2 = _b.sent();
                if (!userLogin_2) {
                    res.status(401).send({ ok: false });
                }
                else {
                    token = jwt.encode(userLogin_2._id, secret);
                    console.log(token);
                    res.cookie("" + email, token, {
                        maxAge: 9000000, httpOnly: true
                    });
                    res.status(200).send({ ok: true });
                }
                return [3 /*break*/, 3];
            case 2:
                error_2 = _b.sent();
                console.error(error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getAllUsers = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var users, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, usersModel_1["default"].find({})];
            case 1:
                users = _a.sent();
                res.send({ users: users });
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                console.error(error_3);
                res.status(500).send({ error: error_3.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateDetail = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, age, gender, location, height, kids, smoking, education, job, relationship, info, religious, email, users, error_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, age = _a.age, gender = _a.gender, location = _a.location, height = _a.height, kids = _a.kids, smoking = _a.smoking, education = _a.education, job = _a.job, relationship = _a.relationship, info = _a.info, religious = _a.religious, email = _a.email;
                return [4 /*yield*/, usersModel_1["default"].findOneAndUpdate({ email: email }, { age: age, gender: gender, location: location, height: height, kids: kids, smoking: smoking, education: education, job: job, relationship: relationship, info: info, religious: religious })];
            case 1:
                users = _b.sent();
                res.status(200).json({
                    status: "ok"
                });
                return [3 /*break*/, 3];
            case 2:
                error_4 = _b.sent();
                console.error(error_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.cardUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var email, userCard, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                email = req.body.email;
                return [4 /*yield*/, usersModel_1["default"].find({ email: email })];
            case 1:
                userCard = _a.sent();
                res.status(200).send({ userCard: userCard });
                console.log(userCard);
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                console.error(error_5);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };

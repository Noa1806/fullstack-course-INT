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
exports.getExpensesOfUser = exports.updateExpenseType = exports.deleteExpense = exports.addExpense = void 0;
var expensesModel_1 = require("./expensesModel");
var jwt_simple_1 = require("jwt-simple");
var secret = process.env.JWT_SECRET;
exports.addExpense = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, supplier, cost, advancePayement, expenseCategory, user, decoded, userId, expenseDB, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, name = _a.name, supplier = _a.supplier, cost = _a.cost, advancePayement = _a.advancePayement, expenseCategory = _a.expenseCategory;
                user = req.cookies.user;
                if (!secret)
                    throw new Error("No secret");
                decoded = jwt_simple_1["default"].decode(user, secret);
                userId = decoded.userId;
                return [4 /*yield*/, expensesModel_1["default"].create({ userId: userId,
                        name: name,
                        supplier: supplier,
                        cost: cost,
                        advancePayement: advancePayement,
                        expenseCategory: expenseCategory })];
            case 1:
                expenseDB = _b.sent();
                console.log(expenseDB);
                res.status(201).send({ ok: true });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _b.sent();
                console.error(error_1);
                res.status(500).send({ error: error_1.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
/*
export const updateUser = (req: any, res: any) => {
  try {
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const updateUserName = (req: any, res: any) => {
  try {
    // const { name, uid } = req.body;
    // if (!name) throw new Error("No name in data");
    // if (!uid) throw new Error("No uid in data");
    // const user = users.find((user) => user.uid === uid);
    // if (!user) throw new Error("No user in array");
    // user.name = name;
    // res.send({ ok: true });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
*/
exports.deleteExpense = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _id, deleteExpense_1, expenses, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                _id = req.body._id;
                return [4 /*yield*/, expensesModel_1["default"].deleteOne({ _id: _id })];
            case 1:
                deleteExpense_1 = _a.sent();
                return [4 /*yield*/, expensesModel_1["default"].find({})];
            case 2:
                expenses = _a.sent();
                res.send({ ok: true, expenses: expenses });
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                console.error(error_2);
                res.status(500).send({ error: error_2.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.updateExpenseType = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, expenseId, expenseType, expenseDB, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, expenseId = _a.expenseId, expenseType = _a.expenseType;
                return [4 /*yield*/, expensesModel_1["default"].findOneAndUpdate({ _id: expenseId }, { expenseType: expenseType })];
            case 1:
                expenseDB = _b.sent();
                res.send({ ok: true, expenseDB: expenseDB });
                return [3 /*break*/, 3];
            case 2:
                error_3 = _b.sent();
                console.error(error_3);
                res.status(500).send({ error: error_3.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getExpensesOfUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, decoded, userId, expenses, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                user = req.cookies.user;
                if (!secret)
                    throw new Error("No secret");
                decoded = jwt_simple_1["default"].decode(user, secret);
                userId = decoded.userId;
                return [4 /*yield*/, expensesModel_1["default"].find({ userId: userId })];
            case 1:
                expenses = _a.sent();
                res.send({ expenses: expenses });
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                res.status(500).send(error_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
/*
export const getUser = async (req: any, res: any) => {
  try {
    const { user } = req.cookies;
    console.log(user);
    if (!secret) throw new Error("No secret");
    
    const decoded = jwt.decode(user, secret);
    console.log(decoded);
    
    const { userId, role} = decoded;

    if(role === 'admin') console.log("Give all avilable data")

    const userDB = await UserModel.findById(userId);

    res.send({ ok: true, user: userDB });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
*/ 

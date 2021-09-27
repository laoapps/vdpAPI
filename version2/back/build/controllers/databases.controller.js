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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Databases = void 0;
var mysql_1 = __importDefault(require("mysql"));
var config_1 = require("../config/config");
var services_1 = require("../services/services");
var message_1 = require("../services/message");
var Databases = /** @class */ (function () {
    function Databases() {
    }
    Databases.connection = function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var params, connection_1;
            return __generator(this, function (_a) {
                try {
                    params = {
                        user: config_1.EDB.dbuser,
                        password: config_1.EDB.dbpass,
                        host: config_1.EDB.dbhost,
                        database: config_1.EDB.dbname
                    };
                    connection_1 = mysql_1.default.createConnection(params);
                    connection_1.connect(function (error) {
                        if (error) {
                            reject(error);
                            return;
                        }
                        resolve(connection_1);
                    });
                }
                catch (error) {
                    reject(error);
                }
                return [2 /*return*/];
            });
        }); });
    };
    Databases.query = function (connection, sql) {
        return new Promise(function (resolve, reject) {
            try {
                connection.query(sql, connection, function (error, result) {
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve(result);
                });
            }
            catch (error) {
                reject(error);
            }
        });
    };
    Databases.insert = function (sql) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Databases.connection().then(function (connection) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, Databases.query(connection, sql).then(function (result) {
                                                resolve(services_1.Service.respon(result, message_1.EMessage.addSuccess, 1));
                                                connection.destroy();
                                            })];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        resolve(services_1.Service.respon([error_1], message_1.EMessage.addFail, 0));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    Databases.update = function (sql) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var error_2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Databases.connection().then(function (connection) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, Databases.query(connection, sql).then(function (result) {
                                                resolve(services_1.Service.respon(result, message_1.EMessage.updateSuccess, 1));
                                                connection.destroy();
                                            })];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        resolve(services_1.Service.respon([error_2], message_1.EMessage.updateFail, 0));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    Databases.delete = function (sql) {
        var _this = this;
        console.log('++++++++++++++++++hdgfhjgdshf+++++++++++++', sql);
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var error_3;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Databases.connection().then(function (connection) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, Databases.query(connection, sql).then(function (result) {
                                                resolve(services_1.Service.respon(result, message_1.EMessage.deleteSuccess, 1));
                                                connection.destroy();
                                            })];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        resolve(services_1.Service.respon([error_3], message_1.EMessage.deleteFail, 0));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    Databases.selectOne = function (sql) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var error_4;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Databases.connection().then(function (connection) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, Databases.query(connection, sql).then(function (result) {
                                                resolve(services_1.Service.respon(result, message_1.EMessage.listOne, 1));
                                                connection.destroy();
                                            })];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        resolve(services_1.Service.respon([error_4], message_1.EMessage.listOne, 0));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    Databases.selectPage = function (sqlCount, sqlPage) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var error_5;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Databases.connection().then(function (connection) { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, Databases.query(connection, sqlCount).then(function (count) { return __awaiter(_this, void 0, void 0, function () {
                                                var num;
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            num = count[0].count;
                                                            if (!(num > 0)) return [3 /*break*/, 2];
                                                            return [4 /*yield*/, Databases.query(connection, sqlPage).then(function (row) {
                                                                    var data = {
                                                                        count: num,
                                                                        rows: row
                                                                    };
                                                                    resolve(services_1.Service.respon(data, message_1.EMessage.listPage, 1));
                                                                    connection.destroy();
                                                                })];
                                                        case 1:
                                                            _a.sent();
                                                            return [3 /*break*/, 3];
                                                        case 2:
                                                            resolve(services_1.Service.respon([], message_1.EMessage.listPage, 0));
                                                            _a.label = 3;
                                                        case 3: return [2 /*return*/];
                                                    }
                                                });
                                            }); })];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _a.sent();
                        resolve(services_1.Service.respon([error_5], message_1.EMessage.listPage, 0));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    Databases.selectAll = function (sql) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var error_6;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Databases.connection().then(function (connection) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, Databases.query(connection, sql).then(function (result) {
                                                resolve(services_1.Service.respon(result, message_1.EMessage.listAll, 1));
                                                connection.destroy();
                                            })];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_6 = _a.sent();
                        resolve(services_1.Service.respon([error_6], message_1.EMessage.empty, 0));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    Databases.getAutoID = function (sql) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var error_7;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Databases.connection().then(function (connection) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, Databases.query(connection, sql).then(function (result) {
                                                resolve(services_1.Service.respon(result, message_1.EMessage.getid, 1));
                                                connection.destroy();
                                            })];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_7 = _a.sent();
                        resolve(services_1.Service.respon([error_7], message_1.EMessage.empty, 0));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    return Databases;
}());
exports.Databases = Databases;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginModel = void 0;
var message_1 = require("../services/message");
var LoginModel = /** @class */ (function () {
    function LoginModel() {
    }
    LoginModel.validateAll = function (data) {
        if (Object.keys(data).length === 0) {
            return message_1.EMessage.objEmpty;
        }
        else if (!data.username) {
            return "username" + message_1.EMessage.empty;
        }
        else if (!data.password) {
            return "password" + message_1.EMessage.empty;
        }
        else {
            return "true";
        }
    };
    return LoginModel;
}());
exports.LoginModel = LoginModel;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
var message_1 = require("../services/message");
var UserModel = /** @class */ (function () {
    function UserModel() {
    }
    UserModel.validateAll = function (data) {
        if (Object.keys(data).length === 0) {
            return message_1.EMessage.objEmpty;
        }
        if (!data.username) {
            return "username" + message_1.EMessage.empty;
        }
        if (!data.password) {
            return "password" + message_1.EMessage.empty;
        }
        return "true";
    };
    return UserModel;
}());
exports.UserModel = UserModel;

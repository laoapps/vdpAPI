"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unitModel = void 0;
var message_1 = require("../services/message");
var unitModel = /** @class */ (function () {
    function unitModel() {
    }
    unitModel.validateAll = function (data) {
        if (Object.keys(data).length === 0) {
            return message_1.EMessage.objEmpty;
        }
        if (!data.uName) {
            return "uName" + message_1.EMessage.empty;
        }
        return "true";
    };
    return unitModel;
}());
exports.unitModel = unitModel;

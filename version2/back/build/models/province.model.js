"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.provinceModel = void 0;
var message_1 = require("../services/message");
var provinceModel = /** @class */ (function () {
    function provinceModel() {
    }
    provinceModel.validateAll = function (data) {
        if (Object.keys(data).length === 0) {
            return message_1.EMessage.objEmpty;
        }
        if (!data.pr_id) {
            return "pr_id" + message_1.EMessage.empty;
        }
        if (!data.pr_name) {
            return "pr_name" + message_1.EMessage.empty;
        }
        return "true";
    };
    return provinceModel;
}());
exports.provinceModel = provinceModel;

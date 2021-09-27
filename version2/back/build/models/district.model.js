"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.districtModel = void 0;
var message_1 = require("../services/message");
var districtModel = /** @class */ (function () {
    function districtModel() {
    }
    districtModel.validateAll = function (data) {
        if (Object.keys(data).length === 0) {
            return message_1.EMessage.objEmpty;
        }
        if (!data.pr_id) {
            return "pr_id" + message_1.EMessage.empty;
        }
        if (!data.dr_id) {
            return "dr_id" + message_1.EMessage.empty;
        }
        if (!data.dr_name) {
            return "dr_name" + message_1.EMessage.empty;
        }
        return "true";
    };
    return districtModel;
}());
exports.districtModel = districtModel;

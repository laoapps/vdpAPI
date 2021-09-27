"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.villageModel = void 0;
var message_1 = require("../services/message");
var villageModel = /** @class */ (function () {
    function villageModel() {
    }
    villageModel.validateAll = function (data) {
        if (Object.keys(data).length === 0) {
            return message_1.EMessage.objEmpty;
        }
        if (!data.vill_id) {
            return "vill_id" + message_1.EMessage.empty;
        }
        if (!data.dr_id) {
            return "dr_id" + message_1.EMessage.empty;
        }
        if (!data.vill_name) {
            return "vill_name" + message_1.EMessage.empty;
        }
        return "true";
    };
    return villageModel;
}());
exports.villageModel = villageModel;

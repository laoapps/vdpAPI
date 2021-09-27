"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffModel = void 0;
var message_1 = require("../services/message");
var StaffModel = /** @class */ (function () {
    function StaffModel() {
    }
    StaffModel.validateAll = function (data) {
        if (Object.keys(data).length === 0) {
            return message_1.EMessage.objEmpty;
        }
        if (!data.st_name) {
            return "username" + message_1.EMessage.empty;
        }
        // if (!data.dob) {
        //     return "date of birth" + EMessage.empty;
        // }
        if (!data.tel) {
            return "tel" + message_1.EMessage.empty;
        }
        //       if (!data.village) {
        //         return "Ban" + EMessage.empty;
        //     }
        //     if (!data.district) {
        //       return "district" + EMessage.empty;
        //   }
        //   if (!data.province) {
        //     return "province" + EMessage.empty;
        // }
        return "true";
    };
    return StaffModel;
}());
exports.StaffModel = StaffModel;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryModel = void 0;
var message_1 = require("../services/message");
var categoryModel = /** @class */ (function () {
    function categoryModel() {
    }
    categoryModel.validateAll = function (data) {
        if (Object.keys(data).length === 0) {
            return message_1.EMessage.objEmpty;
        }
        if (!data.cName) {
            return "catName" + message_1.EMessage.empty;
        }
        return "true";
    };
    return categoryModel;
}());
exports.categoryModel = categoryModel;

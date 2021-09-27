"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productModel = void 0;
var message_1 = require("../services/message");
var productModel = /** @class */ (function () {
    function productModel() {
    }
    productModel.validateAll = function (data) {
        if (Object.keys(data).length === 0) {
            return message_1.EMessage.objEmpty;
        }
        if (!data.pName) {
            return "pName" + message_1.EMessage.empty;
        }
        if (!data.cID) {
            return "cID" + message_1.EMessage.empty;
        }
        if (!data.uID) {
            return "uID" + message_1.EMessage.empty;
        }
        if (!data.sellprice) {
            return "sellprice" + message_1.EMessage.empty;
        }
        if (!data.orderprice) {
            return "orderprice" + message_1.EMessage.empty;
        }
        if (!data.qty) {
            return "qty" + message_1.EMessage.empty;
        }
        return "true";
    };
    return productModel;
}());
exports.productModel = productModel;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productConroller = void 0;
var product_model_1 = require("../models/product.model");
var message_1 = require("../services/message");
var services_1 = require("../services/services");
var databases_controller_1 = require("./databases.controller");
var validate_controller_1 = require("./validate.controller");
var productConroller = /** @class */ (function () {
    function productConroller() {
    }
    productConroller.add = function (req, res) {
        var data = req.body;
        var validate = product_model_1.productModel.validateAll(data);
        console.log(data);
        if (validate !== "true") {
            res.send(services_1.Service.respon([], validate, 0));
        }
        else {
            var sqlproductName = "select * from product where pName='" + data.pName + "'";
            validate_controller_1.ValidateController.alreadyExist(sqlproductName).then(function (result) {
                if (result) {
                    var msg = "porductName: " + data.pName + message_1.EMessage.alreadyExist;
                    res.send(services_1.Service.respon([], msg, 0));
                }
                else {
                    var sql = "insert into product (pName,cID,uID,sellprice,orderprice,qty) \n                    values ('" + data.pName + "','" + data.cID + "','" + data.uID + "','" + data.sellprice + "','" + data.orderprice + "','" + data.qty + "')";
                    databases_controller_1.Databases.insert(sql).then(function (result) {
                        res.send(result);
                    });
                }
            });
        }
    };
    productConroller.update = function (req, res) {
        var data = req.body;
        var validate = product_model_1.productModel.validateAll(data);
        if (!data.id) {
            res.send(services_1.Service.respon([], "id" + message_1.EMessage.empty, 0));
        }
        else if (validate !== "true") {
            res.send(services_1.Service.respon([], validate, 0));
            // 
        }
        else {
            var sqlunitname = "select * from product where pName='" + data.pName + "' and id!='" + data.id + "'";
            validate_controller_1.ValidateController.alreadyExist(sqlunitname).then(function (result) {
                if (result) {
                    var msg = "productname: " + data.pName + message_1.EMessage.alreadyExist;
                    res.send(services_1.Service.respon([], msg, 0));
                }
                else {
                    var sql = "update product set  pName='" + data.pName + "', cID='" + data.cID + "', uID='" + data.uID + "', sellprice='" + data.sellprice + "'\n                  ,orderprice='" + data.orderprice + "',qty='" + data.qty + "' where id='" + data.id + "'";
                    databases_controller_1.Databases.update(sql).then(function (result) {
                        res.send(result);
                    });
                }
            });
        }
    };
    productConroller.delete = function (req, res) {
        var data = req.body;
        if (!data.id) {
            res.send(services_1.Service.respon([], "id" + message_1.EMessage.empty, 0));
        }
        else {
            var sql = "delete from product where id='" + data.id + "'";
            databases_controller_1.Databases.delete(sql).then(function (result) {
                res.send(result);
            });
        }
    };
    productConroller.listOne = function (req, res) {
        var data = req.body;
        var sql = "select * from product where pName like'%" + data.pName + "%'";
        databases_controller_1.Databases.selectOne(sql).then(function (result) {
            res.send(result);
        });
    };
    productConroller.listPage = function (req, res) {
        var data = req.body;
        var page = data.page ? data.page : 1;
        var limit = data.limit ? data.limit : 10;
        var offset = (page - 1) * limit;
        var sqlCount = "select count(*) as count from product";
        // const sqlPage = `select * from product limit ${limit} offset ${offset} `;
        var sqlPage = "select p.id,pName,cName,uName,sellprice,orderprice,qty from product p inner join\n       category c on p.cID=c.id inner join unit u on p.uID=u.id limit " + limit + " offset " + offset + " ";
        databases_controller_1.Databases.selectPage(sqlCount, sqlPage).then(function (result) {
            res.send(result);
        });
    };
    productConroller.listAll = function (req, res) {
        var sql = "select p.id,pName,cName,uName,sellprice,orderprice,qty from product p inner join\n      category c on p.cID=c.cID inner join unit u on p.uID=u.id";
        // order by cID desc
        databases_controller_1.Databases.selectAll(sql).then(function (result) {
            res.send(result);
        });
    };
    productConroller.listAllSbyid = function (req, res) {
        var data = req.body;
        var sql = "select * from product where id='" + data.id + "'";
        databases_controller_1.Databases.selectOne(sql).then(function (result) {
            res.send(result);
        });
    };
    productConroller.getAutoIDproduct = function (req, res) {
        var sql = "select max(id) as Pid from product";
        databases_controller_1.Databases.getAutoID(sql).then(function (result) {
            res.send(result);
        });
    };
    return productConroller;
}());
exports.productConroller = productConroller;

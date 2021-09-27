"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryConroller = void 0;
var category_model_1 = require("../models/category.model");
var message_1 = require("../services/message");
var services_1 = require("../services/services");
var databases_controller_1 = require("./databases.controller");
var validate_controller_1 = require("./validate.controller");
var categoryConroller = /** @class */ (function () {
    function categoryConroller() {
    }
    categoryConroller.add = function (req, res) {
        var data = req.body;
        var validate = category_model_1.categoryModel.validateAll(data);
        console.log(data);
        if (validate !== "true") {
            res.send(services_1.Service.respon([], validate, 0));
        }
        else {
            var sqlcatName = "select * from category where cName='" + data.cName + "'";
            validate_controller_1.ValidateController.alreadyExist(sqlcatName).then(function (result) {
                if (result) {
                    var msg = "categoryName: " + data.cName + message_1.EMessage.alreadyExist;
                    res.send(services_1.Service.respon([], msg, 0));
                }
                else {
                    var sql = "insert into category (cName) values ('" + data.cName + "')";
                    databases_controller_1.Databases.insert(sql).then(function (result) {
                        res.send(result);
                    });
                }
            });
        }
    };
    categoryConroller.update = function (req, res) {
        var data = req.body;
        var validate = category_model_1.categoryModel.validateAll(data);
        if (!data.id) {
            res.send(services_1.Service.respon([], "id" + message_1.EMessage.empty, 0));
        }
        else if (validate !== "true") {
            res.send(services_1.Service.respon([], validate, 0));
            // 
        }
        else {
            var sqlcategory = "select * from category where cName='" + data.cName + "' and id!='" + data.id + "'";
            validate_controller_1.ValidateController.alreadyExist(sqlcategory).then(function (result) {
                if (result) {
                    var msg = "categoryname: " + data.cName + message_1.EMessage.alreadyExist;
                    res.send(services_1.Service.respon([], msg, 0));
                }
                else {
                    var sql = "update category set  cName='" + data.cName + "' where id='" + data.id + "'";
                    databases_controller_1.Databases.update(sql).then(function (result) {
                        res.send(result);
                    });
                }
            });
        }
    };
    categoryConroller.delete = function (req, res) {
        var data = req.body;
        if (!data.id) {
            res.send(services_1.Service.respon([], "id" + message_1.EMessage.empty, 0));
        }
        else {
            var sql = "delete from category where id='" + data.id + "'";
            databases_controller_1.Databases.delete(sql).then(function (result) {
                res.send(result);
            });
        }
    };
    categoryConroller.listOne = function (req, res) {
        var data = req.body;
        var sql = "select * from category where cName like'%" + data.cName + "%'";
        databases_controller_1.Databases.selectOne(sql).then(function (result) {
            res.send(result);
        });
    };
    categoryConroller.listPage = function (req, res) {
        var data = req.body;
        var page = data.page ? data.page : 1;
        var limit = data.limit ? data.limit : 10;
        var offset = (page - 1) * limit;
        var sqlCount = "select count(*) as count from category";
        var sqlPage = "select * from category limit " + limit + " offset " + offset + " ";
        databases_controller_1.Databases.selectPage(sqlCount, sqlPage).then(function (result) {
            res.send(result);
        });
    };
    categoryConroller.listAll = function (req, res) {
        var sql = "select * from category";
        // order by cID desc
        databases_controller_1.Databases.selectAll(sql).then(function (result) {
            res.send(result);
        });
    };
    categoryConroller.getAutoIDcat = function (req, res) {
        var sql = "select max(id) as Cid from category";
        databases_controller_1.Databases.getAutoID(sql).then(function (result) {
            res.send(result);
        });
    };
    return categoryConroller;
}());
exports.categoryConroller = categoryConroller;

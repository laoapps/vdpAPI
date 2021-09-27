"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserConroller = void 0;
var user_model_1 = require("../models/user.model");
var message_1 = require("../services/message");
var services_1 = require("../services/services");
var databases_controller_1 = require("./databases.controller");
var validate_controller_1 = require("./validate.controller");
var UserConroller = /** @class */ (function () {
    function UserConroller() {
    }
    UserConroller.add = function (req, res) {
        var data = req.body;
        var validate = user_model_1.UserModel.validateAll(data);
        if (validate !== "true") {
            res.send(services_1.Service.respon([], validate, 0));
        }
        else {
            var sqlUsername = "select * from users where username='" + data.username + "'";
            validate_controller_1.ValidateController.alreadyExist(sqlUsername).then(function (result) {
                if (result) {
                    var msg = "username: " + data.username + message_1.EMessage.alreadyExist;
                    res.send(services_1.Service.respon([], msg, 0));
                }
                else {
                    var sql = "insert into users (username,pwd)\n                         values ('" + data.username + "','" + data.password + "')";
                    databases_controller_1.Databases.insert(sql).then(function (result) {
                        res.send(result);
                    });
                }
            });
        }
    };
    UserConroller.update = function (req, res) {
        var data = req.body;
        var validate = user_model_1.UserModel.validateAll(data);
        if (!data.id) {
            res.send(services_1.Service.respon([], "id" + message_1.EMessage.empty, 0));
        }
        else if (validate !== "true") {
            res.send(services_1.Service.respon([], validate, 0));
            // 
        }
        else {
            var sqlUsername = "select * from users where username='" + data.username + "' and id!='" + data.id + "'";
            validate_controller_1.ValidateController.alreadyExist(sqlUsername).then(function (result) {
                if (result) {
                    var msg = "username: " + data.username + message_1.EMessage.alreadyExist;
                    res.send(services_1.Service.respon([], msg, 0));
                }
                else {
                    var sql = "update users set  username='" + data.username + "', pwd='" + data.password + "' where id='" + data.id + "'";
                    databases_controller_1.Databases.update(sql).then(function (result) {
                        res.send(result);
                    });
                }
            });
        }
    };
    UserConroller.delete = function (req, res) {
        var data = req.body;
        if (!data.id) {
            res.send(services_1.Service.respon([], "id" + message_1.EMessage.empty, 0));
        }
        else {
            var sql = "delete from users where id='" + data.id + "'";
            databases_controller_1.Databases.delete(sql).then(function (result) {
                res.send(result);
            });
        }
    };
    UserConroller.listOne = function (req, res) {
        var data = req.body;
        if (!data.id) {
            res.send(services_1.Service.respon([], "id" + message_1.EMessage.empty, 0));
        }
        else {
            var sql = "select * from users where id = " + data.id;
            databases_controller_1.Databases.selectOne(sql).then(function (result) {
                res.send(result);
            });
        }
    };
    UserConroller.listPage = function (req, res) {
        var data = req.body;
        var page = data.page ? data.page : 1;
        var limit = data.limit ? data.limit : 10;
        var offset = (page - 1) * limit;
        var sqlCount = "select count(*) as count from users";
        var sqlPage = "select * from users limit " + limit + " offset " + offset + " ";
        databases_controller_1.Databases.selectPage(sqlCount, sqlPage).then(function (result) {
            res.send(result);
        });
    };
    UserConroller.listAll = function (req, res) {
        var sql = "select * from users order by id desc";
        databases_controller_1.Databases.selectAll(sql).then(function (result) {
            res.send(result);
        });
    };
    return UserConroller;
}());
exports.UserConroller = UserConroller;

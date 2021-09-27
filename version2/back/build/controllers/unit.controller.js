"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unitConroller = void 0;
var unit_model_1 = require("../models/unit.model");
var message_1 = require("../services/message");
var services_1 = require("../services/services");
var databases_controller_1 = require("./databases.controller");
var validate_controller_1 = require("./validate.controller");
var unitConroller = /** @class */ (function () {
    function unitConroller() {
    }
    unitConroller.add = function (req, res) {
        var data = req.body;
        var validate = unit_model_1.unitModel.validateAll(data);
        console.log(data);
        if (validate !== "true") {
            res.send(services_1.Service.respon([], validate, 0));
        }
        else {
            var sqlunitName = "select * from unit where uName='" + data.uName + "'";
            validate_controller_1.ValidateController.alreadyExist(sqlunitName).then(function (result) {
                if (result) {
                    var msg = "unitName: " + data.uName + message_1.EMessage.alreadyExist;
                    res.send(services_1.Service.respon([], msg, 0));
                }
                else {
                    var sql = "insert into unit (uName) values ('" + data.uName + "')";
                    databases_controller_1.Databases.insert(sql).then(function (result) {
                        res.send(result);
                    });
                }
            });
        }
    };
    unitConroller.update = function (req, res) {
        var data = req.body;
        var validate = unit_model_1.unitModel.validateAll(data);
        if (!data.id) {
            res.send(services_1.Service.respon([], "id" + message_1.EMessage.empty, 0));
        }
        else if (validate !== "true") {
            res.send(services_1.Service.respon([], validate, 0));
        }
        else {
            var sqlunitname = "select * from unit where uName='" + data.uName + "' and id!='" + data.id + "'";
            validate_controller_1.ValidateController.alreadyExist(sqlunitname).then(function (result) {
                if (result) {
                    var msg = "unitname: " + data.uName + message_1.EMessage.alreadyExist;
                    res.send(services_1.Service.respon([], msg, 0));
                }
                else {
                    var sql = "update unit set  uName='" + data.uName + "' where id='" + data.id + "'";
                    databases_controller_1.Databases.update(sql).then(function (result) {
                        res.send(result);
                    });
                }
            });
        }
    };
    unitConroller.delete = function (req, res) {
        var data = req.body;
        if (!data.id) {
            res.send(services_1.Service.respon([], "id" + message_1.EMessage.empty, 0));
        }
        else {
            var sql = "delete from unit where id='" + data.id + "'";
            databases_controller_1.Databases.delete(sql).then(function (result) {
                res.send(result);
            });
        }
    };
    unitConroller.listPage = function (req, res) {
        var data = req.body;
        var page = data.page ? data.page : 1;
        var limit = data.limit ? data.limit : 10;
        var offset = (page - 1) * limit;
        var sqlCount = "select count(*) as count from unit";
        var sqlPage = "select * from unit limit " + limit + " offset " + offset + " ";
        databases_controller_1.Databases.selectPage(sqlCount, sqlPage).then(function (result) {
            res.send(result);
        });
    };
    unitConroller.listOne = function (req, res) {
        var data = req.body;
        var sql = "select * from unit where uName like'%" + data.uName + "%'";
        databases_controller_1.Databases.selectOne(sql).then(function (result) {
            res.send(result);
        });
    };
    unitConroller.listAll = function (req, res) {
        var sql = "select * from unit";
        // order by cID desc
        databases_controller_1.Databases.selectAll(sql).then(function (result) {
            res.send(result);
        });
    };
    unitConroller.getAutoIDunit = function (req, res) {
        var sql = "select max(id) as Uid from unit";
        databases_controller_1.Databases.getAutoID(sql).then(function (result) {
            res.send(result);
        });
    };
    return unitConroller;
}());
exports.unitConroller = unitConroller;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.provinceConroller = void 0;
var province_model_1 = require("../models/province.model");
var message_1 = require("../services/message");
var services_1 = require("../services/services");
var databases_controller_1 = require("./databases.controller");
var validate_controller_1 = require("./validate.controller");
var provinceConroller = /** @class */ (function () {
    function provinceConroller() {
    }
    provinceConroller.add = function (req, res) {
        var data = req.body;
        var validate = province_model_1.provinceModel.validateAll(data);
        console.log(data);
        if (validate !== "true") {
            res.send(services_1.Service.respon([], validate, 0));
        }
        else {
            var sqlcatName = "select * from province where pr_name='" + data.pr_name + "'";
            validate_controller_1.ValidateController.alreadyExist(sqlcatName).then(function (result) {
                if (result) {
                    var msg = "pr_name: " + data.pr_name + message_1.EMessage.alreadyExist;
                    res.send(services_1.Service.respon([], msg, 0));
                }
                else {
                    var sql = "insert into province (pr_id,pr_name,pr_name_en) values ('" + data.pr_id + "','" + data.pr_name + "','" + data.pr_name_en + "')";
                    databases_controller_1.Databases.insert(sql).then(function (result) {
                        res.send(result);
                    });
                }
            });
        }
    };
    provinceConroller.update = function (req, res) {
        var data = req.body;
        var validate = province_model_1.provinceModel.validateAll(data);
        if (!data.pr_id) {
            res.send(services_1.Service.respon([], "pr_id" + message_1.EMessage.empty, 0));
        }
        else if (validate !== "true") {
            res.send(services_1.Service.respon([], validate, 0));
            // 
        }
        else {
            var sqlcategory = "select * from province where pr_name='" + data.pr_name + "' and pr_id!='" + data.pr_id + "'";
            validate_controller_1.ValidateController.alreadyExist(sqlcategory).then(function (result) {
                if (result) {
                    var msg = "pr_name: " + data.pr_name + message_1.EMessage.alreadyExist;
                    res.send(services_1.Service.respon([], msg, 0));
                }
                else {
                    var sql = "update province set  pr_name='" + data.pr_name + "',pr_name_en='" + data.pr_name_en + "' where pr_id='" + data.pr_id + "'";
                    databases_controller_1.Databases.update(sql).then(function (result) {
                        res.send(result);
                    });
                }
            });
        }
    };
    provinceConroller.delete = function (req, res) {
        var data = req.body;
        if (!data.pr_id) {
            res.send(services_1.Service.respon([], "id" + message_1.EMessage.empty, 0));
        }
        else {
            var sql = "delete from province where pr_id='" + data.pr_id + "'";
            databases_controller_1.Databases.delete(sql).then(function (result) {
                res.send(result);
            });
        }
    };
    provinceConroller.listOne = function (req, res) {
        var data = req.body;
        var sql = "select * from province where pr_name like'%" + data.pr_name + "%' or pr_name_en like'%" + data.pr_name_en + "%' or pr_id like'%" + data.pr_id + "%'";
        databases_controller_1.Databases.selectOne(sql).then(function (result) {
            res.send(result);
        });
    };
    provinceConroller.listPage = function (req, res) {
        var data = req.body;
        var page = data.page ? data.page : 1;
        var limit = data.limit ? data.limit : 10;
        var offset = (page - 1) * limit;
        var sqlCount = "select count(*) as count from province";
        var sqlPage = "select * from province limit " + limit + " offset " + offset + " ";
        databases_controller_1.Databases.selectPage(sqlCount, sqlPage).then(function (result) {
            res.send(result);
        });
    };
    provinceConroller.listAll = function (req, res) {
        var sql = "select * from province";
        // order by cID desc
        databases_controller_1.Databases.selectAll(sql).then(function (result) {
            res.send(result);
        });
    };
    provinceConroller.getAutoIDprovince = function (req, res) {
        var sql = "select max(pr_id) as pr_id from province";
        databases_controller_1.Databases.getAutoID(sql).then(function (result) {
            res.send(result);
        });
    };
    return provinceConroller;
}());
exports.provinceConroller = provinceConroller;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.villageConroller = void 0;
var village_model_1 = require("../models/village.model");
var message_1 = require("../services/message");
var services_1 = require("../services/services");
var databases_controller_1 = require("./databases.controller");
var validate_controller_1 = require("./validate.controller");
var villageConroller = /** @class */ (function () {
    function villageConroller() {
    }
    villageConroller.add = function (req, res) {
        var data = req.body;
        var validate = village_model_1.villageModel.validateAll(data);
        console.log(data);
        if (validate !== "true") {
            res.send(services_1.Service.respon([], validate, 0));
        }
        else {
            var sqlcatName = "select * from village where vill_name='" + data.vill_name + "'";
            validate_controller_1.ValidateController.alreadyExist(sqlcatName).then(function (result) {
                if (result) {
                    var msg = "vill_name: " + data.vill_name + message_1.EMessage.alreadyExist;
                    res.send(services_1.Service.respon([], msg, 0));
                }
                else {
                    var sql = "insert into village (vill_id,vill_name,vill_name_en,dr_id) values ('" + data.vill_id + "','" + data.vill_name + "','" + data.vill_name_en + "','" + data.dr_id + "')";
                    databases_controller_1.Databases.insert(sql).then(function (result) {
                        res.send(result);
                    });
                }
            });
        }
    };
    villageConroller.update = function (req, res) {
        var data = req.body;
        var validate = village_model_1.villageModel.validateAll(data);
        if (!data.vill_id) {
            res.send(services_1.Service.respon([], "vill_id" + message_1.EMessage.empty, 0));
        }
        else if (validate !== "true") {
            res.send(services_1.Service.respon([], validate, 0));
            // 
        }
        else {
            var sqlcategory = "select * from village where vill_name='" + data.vill_name + "' and vill_id!='" + data.vill_id + "'";
            validate_controller_1.ValidateController.alreadyExist(sqlcategory).then(function (result) {
                if (result) {
                    var msg = "vill_name: " + data.vill_name + message_1.EMessage.alreadyExist;
                    res.send(services_1.Service.respon([], msg, 0));
                }
                else {
                    var sql = "update village set  vill_name='" + data.vill_name + "',vill_name_en='" + data.vill_name_en + "',dr_id='" + data.dr_id + "' where vill_id='" + data.vill_id + "'";
                    databases_controller_1.Databases.update(sql).then(function (result) {
                        res.send(result);
                    });
                }
            });
        }
    };
    villageConroller.delete = function (req, res) {
        var data = req.body;
        if (!data.vill_id) {
            res.send(services_1.Service.respon([], "vill_id" + message_1.EMessage.empty, 0));
        }
        else {
            var sql = "delete from village where vill_id='" + data.vill_id + "'";
            databases_controller_1.Databases.delete(sql).then(function (result) {
                res.send(result);
            });
        }
    };
    villageConroller.listOne = function (req, res) {
        var data = req.body;
        var sql = "select vill_id,vill_name,vill_name_en,dr_name,dr_name_en from village v inner join dristric d on v.dr_id=d.dr_id where vill_name like'%" + data.vill_name + "%' or vill_name_en like'%" + data.vill_name_en + "%' or dr_name like'%" + data.dr_name + "%' or dr_name_en like'%" + data.dr_name_en + "%'";
        databases_controller_1.Databases.selectOne(sql).then(function (result) {
            res.send(result);
        });
    };
    villageConroller.getVillage_by_districtID = function (req, res) {
        var data = req.body;
        var sql = "select vill_id,vill_name from village v inner join dristric d on v.dr_id=d.dr_id where v.dr_id='" + data.dr_id + "'";
        databases_controller_1.Databases.selectOne(sql).then(function (result) {
            res.send(result);
        });
    };
    villageConroller.listPage = function (req, res) {
        var data = req.body;
        var page = data.page ? data.page : 1;
        var limit = data.limit ? data.limit : 10;
        var offset = (page - 1) * limit;
        var sqlCount = "select count(*) as count from village";
        var sqlPage = "select vill_id,vill_name,vill_name_en,dr_name,dr_name_en from village v inner join dristric d on v.dr_id=d.dr_id limit " + limit + " offset " + offset + " ";
        databases_controller_1.Databases.selectPage(sqlCount, sqlPage).then(function (result) {
            res.send(result);
        });
    };
    villageConroller.listAll = function (req, res) {
        var sql = "select * from village";
        // order by cID desc
        databases_controller_1.Databases.selectAll(sql).then(function (result) {
            res.send(result);
        });
    };
    villageConroller.getAutoIDvillage = function (req, res) {
        var sql = "select max(vill_id) as vill_id from village";
        databases_controller_1.Databases.getAutoID(sql).then(function (result) {
            res.send(result);
        });
    };
    return villageConroller;
}());
exports.villageConroller = villageConroller;

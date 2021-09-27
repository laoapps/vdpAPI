"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.districtConroller = void 0;
var district_model_1 = require("../models/district.model");
var message_1 = require("../services/message");
var services_1 = require("../services/services");
var databases_controller_1 = require("./databases.controller");
var validate_controller_1 = require("./validate.controller");
var districtConroller = /** @class */ (function () {
    function districtConroller() {
    }
    districtConroller.add = function (req, res) {
        var data = req.body;
        var validate = district_model_1.districtModel.validateAll(data);
        console.log(data);
        if (validate !== "true") {
            res.send(services_1.Service.respon([], validate, 0));
        }
        else {
            var sqlcatName = "select * from dristric where dr_name='" + data.dr_name + "'";
            validate_controller_1.ValidateController.alreadyExist(sqlcatName).then(function (result) {
                if (result) {
                    var msg = "dr_name: " + data.dr_name + message_1.EMessage.alreadyExist;
                    res.send(services_1.Service.respon([], msg, 0));
                }
                else {
                    var sql = "insert into dristric (dr_id,dr_name,dr_name_en,pr_id) values ('" + data.dr_id + "','" + data.dr_name + "','" + data.dr_name_en + "','" + data.pr_id + "')";
                    databases_controller_1.Databases.insert(sql).then(function (result) {
                        res.send(result);
                    });
                }
            });
        }
    };
    districtConroller.update = function (req, res) {
        var data = req.body;
        var validate = district_model_1.districtModel.validateAll(data);
        if (!data.dr_id) {
            res.send(services_1.Service.respon([], "dr_id" + message_1.EMessage.empty, 0));
        }
        else if (validate !== "true") {
            res.send(services_1.Service.respon([], validate, 0));
            // 
        }
        else {
            var sqlcategory = "select * from dristric where dr_name='" + data.dr_name + "' and dr_id!='" + data.dr_id + "'";
            validate_controller_1.ValidateController.alreadyExist(sqlcategory).then(function (result) {
                if (result) {
                    var msg = "dr_name: " + data.dr_name + message_1.EMessage.alreadyExist;
                    res.send(services_1.Service.respon([], msg, 0));
                }
                else {
                    var sql = "update dristric set  dr_name='" + data.dr_name + "',dr_name_en='" + data.dr_name_en + "',pr_id='" + data.pr_id + "' where dr_id='" + data.dr_id + "'";
                    databases_controller_1.Databases.update(sql).then(function (result) {
                        res.send(result);
                    });
                }
            });
        }
    };
    districtConroller.delete = function (req, res) {
        var data = req.body;
        if (!data.dr_id) {
            res.send(services_1.Service.respon([], "dr_id" + message_1.EMessage.empty, 0));
        }
        else {
            var sql = "delete from dristric where dr_id='" + data.dr_id + "'";
            databases_controller_1.Databases.delete(sql).then(function (result) {
                res.send(result);
            });
        }
    };
    districtConroller.listOne = function (req, res) {
        var data = req.body;
        var sql = "select dr_id,dr_name,dr_name_en,pr_name,pr_name_en from dristric d inner join province p on d.pr_id=p.pr_id where dr_name like'%" + data.dr_name + "%' or dr_name_en like'%" + data.dr_name_en + "%' or pr_name like'%" + data.pr_name + "%' or pr_name_en like'%" + data.pr_name_en + "%'";
        databases_controller_1.Databases.selectOne(sql).then(function (result) {
            res.send(result);
        });
    };
    districtConroller.getDistrict_by_provinceID = function (req, res) {
        var data = req.body;
        var sql = "select dr_id,dr_name from dristric d inner join province p on d.pr_id=p.pr_id where d.pr_id='" + data.pr_id + "'";
        databases_controller_1.Databases.selectOne(sql).then(function (result) {
            res.send(result);
        });
    };
    districtConroller.listPage = function (req, res) {
        var data = req.body;
        var page = data.page ? data.page : 1;
        var limit = data.limit ? data.limit : 10;
        var offset = (page - 1) * limit;
        var sqlCount = "select count(*) as count from dristric";
        var sqlPage = "select dr_id,dr_name,dr_name_en,pr_name,pr_name_en from dristric d inner join province p on d.pr_id=p.pr_id limit " + limit + " offset " + offset + " ";
        databases_controller_1.Databases.selectPage(sqlCount, sqlPage).then(function (result) {
            res.send(result);
        });
    };
    districtConroller.listAll = function (req, res) {
        var sql = "select * from dristric";
        // order by cID desc
        databases_controller_1.Databases.selectAll(sql).then(function (result) {
            res.send(result);
        });
    };
    districtConroller.getAutoIDdistrict = function (req, res) {
        var sql = "select max(dr_id) as dr_id from dristric";
        databases_controller_1.Databases.getAutoID(sql).then(function (result) {
            res.send(result);
        });
    };
    return districtConroller;
}());
exports.districtConroller = districtConroller;

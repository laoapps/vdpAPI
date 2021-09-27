"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffConroller = void 0;
var staff_model_1 = require("../models/staff.model");
var message_1 = require("../services/message");
var services_1 = require("../services/services");
var databases_controller_1 = require("./databases.controller");
var validate_controller_1 = require("./validate.controller");
var StaffConroller = /** @class */ (function () {
    function StaffConroller() {
    }
    StaffConroller.add = function (req, res) {
        var data = req.body;
        var validate = staff_model_1.StaffModel.validateAll(data);
        if (validate !== "true") {
            res.send(services_1.Service.respon([], validate, 0));
        }
        else {
            var sqlUsername = "select * from staff where st_name='" + data.st_name + "'";
            validate_controller_1.ValidateController.alreadyExist(sqlUsername).then(function (result) {
                if (result) {
                    var msg = "st_name: " + data.st_name + message_1.EMessage.alreadyExist;
                    res.send(services_1.Service.respon([], msg, 0));
                }
                else {
                    var imgName = services_1.Service.baseToimg(data.images, data.st_id);
                    console.log(imgName);
                    var sql = "insert into staff (st_id,st_name,dob,tel,village,district,province,images)\n                  values ('" + data.st_id + "','" + data.st_name + "','" + data.dob + "','" + data.tel + "','" + data.village + "','" + data.district + "','" + data.province + "','" + imgName + "')";
                    databases_controller_1.Databases.insert(sql).then(function (result) {
                        res.send(result);
                    });
                }
            });
        }
    };
    StaffConroller.update = function (req, res) {
        var data = req.body;
        var validate = staff_model_1.StaffModel.validateAll(data);
        if (!data.st_id) {
            res.send(services_1.Service.respon([], "id" + message_1.EMessage.empty, 0));
        }
        else if (validate !== "true") {
            res.send(services_1.Service.respon([], validate, 0));
        }
        else {
            var sqlstaffname = "select * from staff where st_name='" + data.st_name + "' and st_id!='" + data.st_id + "'";
            validate_controller_1.ValidateController.alreadyExist(sqlstaffname).then(function (result) {
                if (result) {
                    var msg = "Staffname: " + data.st_name + message_1.EMessage.alreadyExist;
                    res.send(services_1.Service.respon([], msg, 0));
                }
                else {
                    //+++++++++++++++++++++change base64 to img and sent img_name to server+++++++++++++++++++++++++++++++++++++++++++++++
                    var imgName = "";
                    if (data.isLoad == true) {
                        imgName = data.images.split('static/')[1];
                        console.log('ssssssssssssss', imgName);
                    }
                    else {
                        imgName = services_1.Service.baseToimg(data.images, data.st_id);
                    }
                    var sql = "update staff set  st_name='" + data.st_name + "', dob='" + data.dob + "', tel='" + data.tel + "', village='" + data.village + "'\n                    ,district='" + data.district + "',province='" + data.province + "',images='" + imgName + "' where st_id='" + data.st_id + "'";
                    databases_controller_1.Databases.update(sql).then(function (result) {
                        res.send(result);
                    });
                }
            });
        }
    };
    StaffConroller.delete = function (req, res) {
        var data = req.body;
        if (!data.st_id) {
            res.send(services_1.Service.respon([], "id" + message_1.EMessage.empty, 0));
        }
        else {
            var sql = "delete from staff where st_id='" + data.st_id + "'";
            databases_controller_1.Databases.delete(sql).then(function (result) {
                res.send(result);
            });
        }
    };
    StaffConroller.listOne = function (req, res) {
        var data = req.body;
        var sql = "select * from staff where st_name like'%" + data.st_name + "%'";
        databases_controller_1.Databases.selectOne(sql).then(function (result) {
            res.send(result);
        });
    };
    StaffConroller.listPage = function (req, res) {
        var data = req.body;
        var page = data.page ? data.page : 1;
        var limit = data.limit ? data.limit : 10;
        var offset = (page - 1) * limit;
        var sqlCount = "select count(*) as count from staff";
        var sqlPage = "select * from staff limit " + limit + " offset " + offset + " ";
        databases_controller_1.Databases.selectPage(sqlCount, sqlPage).then(function (result) {
            res.send(result);
        });
    };
    StaffConroller.listAll = function (req, res) {
        var sql = "select * from staff order by st_id desc";
        databases_controller_1.Databases.selectAll(sql).then(function (result) {
            res.send(result);
        });
    };
    StaffConroller.getAutoID = function (req, res) {
        var sql = "select max(st_id) as st_id from staff";
        databases_controller_1.Databases.getAutoID(sql).then(function (result) {
            res.send(result);
        });
    };
    return StaffConroller;
}());
exports.StaffConroller = StaffConroller;

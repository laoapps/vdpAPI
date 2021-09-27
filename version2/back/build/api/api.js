"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express_1 = __importDefault(require("express"));
var user_controller_1 = require("../controllers/user.controller");
var authorize_controller_1 = require("../controllers/authorize.controller");
var category_controller_1 = require("../controllers/category.controller");
var unit_controller_1 = require("../controllers/unit.controller");
var product_controller_1 = require("../controllers/product.controller");
var staff_controller_1 = require("../controllers/staff.controller");
var province_controller_1 = require("../controllers/province.controller");
var district_controller_1 = require("../controllers/district.controller");
var village_controller_1 = require("../controllers/village.controller");
var app = express_1.default();
//<=== Login ===>
app.post('/login', authorize_controller_1.AuthorizeController.logIn);
//<=== User ===>
app.post('/addUser', user_controller_1.UserConroller.add);
app.post('/updateUser', authorize_controller_1.AuthorizeController.checkAuthorize, user_controller_1.UserConroller.update);
app.post('/deleteUser', authorize_controller_1.AuthorizeController.checkAuthorize, user_controller_1.UserConroller.delete);
app.post('/listOneUser', user_controller_1.UserConroller.listOne);
app.post('/listPageUser', user_controller_1.UserConroller.listPage);
app.post('/listAllUser', user_controller_1.UserConroller.listAll);
//<=== Category ===>
app.post('/addcat', authorize_controller_1.AuthorizeController.checkAuthorize, category_controller_1.categoryConroller.add);
app.post('/updatecat', authorize_controller_1.AuthorizeController.checkAuthorize, category_controller_1.categoryConroller.update);
app.post('/deletecat', authorize_controller_1.AuthorizeController.checkAuthorize, category_controller_1.categoryConroller.delete);
app.post('/listOnecat', category_controller_1.categoryConroller.listOne);
app.post('/listPagecat', category_controller_1.categoryConroller.listPage);
app.post('/listAllcat', category_controller_1.categoryConroller.listAll);
app.post('/getAutoIDcat', category_controller_1.categoryConroller.getAutoIDcat);
//<=== Unit ===>
app.post('/addunit', authorize_controller_1.AuthorizeController.checkAuthorize, unit_controller_1.unitConroller.add);
app.post('/updateunit', authorize_controller_1.AuthorizeController.checkAuthorize, unit_controller_1.unitConroller.update);
app.post('/deleteunit', authorize_controller_1.AuthorizeController.checkAuthorize, unit_controller_1.unitConroller.delete);
app.post('/listOneunit', unit_controller_1.unitConroller.listOne);
app.post('/listPageunit', unit_controller_1.unitConroller.listPage);
app.post('/listAllunit', unit_controller_1.unitConroller.listAll);
app.post('/getAutoIDunit', unit_controller_1.unitConroller.getAutoIDunit);
//<=== Product ===>
app.post('/addproduct', authorize_controller_1.AuthorizeController.checkAuthorize, product_controller_1.productConroller.add);
app.post('/updateproduct', authorize_controller_1.AuthorizeController.checkAuthorize, product_controller_1.productConroller.update);
app.post('/deleteproduct', authorize_controller_1.AuthorizeController.checkAuthorize, product_controller_1.productConroller.delete);
app.post('/listOneproduct', product_controller_1.productConroller.listOne);
app.post('/listPageproduct', product_controller_1.productConroller.listPage);
app.post('/listAllproduct', product_controller_1.productConroller.listAll);
app.post('/getAutoIDproduct', product_controller_1.productConroller.getAutoIDproduct);
app.post('/listAllSbyid', product_controller_1.productConroller.listAllSbyid);
//<=== Staff ===>
app.post('/addstaff', authorize_controller_1.AuthorizeController.checkAuthorize, staff_controller_1.StaffConroller.add);
app.post('/updatestaff', authorize_controller_1.AuthorizeController.checkAuthorize, staff_controller_1.StaffConroller.update);
app.post('/deletestaff', authorize_controller_1.AuthorizeController.checkAuthorize, staff_controller_1.StaffConroller.delete);
app.post('/listOnestaff', staff_controller_1.StaffConroller.listOne);
app.post('/listPagestaff', staff_controller_1.StaffConroller.listPage);
app.post('/listAllstaff', staff_controller_1.StaffConroller.listAll);
app.post('/getAutoID', staff_controller_1.StaffConroller.getAutoID);
//<=== province ===>
app.post('/addprovince', authorize_controller_1.AuthorizeController.checkAuthorize, province_controller_1.provinceConroller.add);
app.post('/updateprovince', authorize_controller_1.AuthorizeController.checkAuthorize, province_controller_1.provinceConroller.update);
app.post('/deleteprovince', authorize_controller_1.AuthorizeController.checkAuthorize, province_controller_1.provinceConroller.delete);
app.post('/listOneprovince', province_controller_1.provinceConroller.listOne);
app.post('/listPageprovince', province_controller_1.provinceConroller.listPage);
app.post('/listAllprovince', province_controller_1.provinceConroller.listAll);
app.post('/getAutoIDprovince', province_controller_1.provinceConroller.getAutoIDprovince);
//<=== district ===>
app.post('/adddistrict', authorize_controller_1.AuthorizeController.checkAuthorize, district_controller_1.districtConroller.add);
app.post('/updatedistrict', authorize_controller_1.AuthorizeController.checkAuthorize, district_controller_1.districtConroller.update);
app.post('/deletedistrict', authorize_controller_1.AuthorizeController.checkAuthorize, district_controller_1.districtConroller.delete);
app.post('/listOnedistrict', district_controller_1.districtConroller.listOne);
app.post('/listPagedistrict', district_controller_1.districtConroller.listPage);
app.post('/listAlldistrict', district_controller_1.districtConroller.listAll);
app.post('/getAutoIDdistrict', district_controller_1.districtConroller.getAutoIDdistrict);
app.post('/getDistrict_by_provinceID', district_controller_1.districtConroller.getDistrict_by_provinceID);
//<=== village ===>
app.post('/addvillage', authorize_controller_1.AuthorizeController.checkAuthorize, village_controller_1.villageConroller.add);
app.post('/updatevillage', authorize_controller_1.AuthorizeController.checkAuthorize, village_controller_1.villageConroller.update);
app.post('/deletevillage', authorize_controller_1.AuthorizeController.checkAuthorize, village_controller_1.villageConroller.delete);
app.post('/listOnevillage', village_controller_1.villageConroller.listOne);
app.post('/listPagevillage', village_controller_1.villageConroller.listPage);
app.post('/listAllvillage', village_controller_1.villageConroller.listAll);
app.post('/getAutoIDvillage', village_controller_1.villageConroller.getAutoIDvillage);
app.post('/getVillage_by_districtID', village_controller_1.villageConroller.getVillage_by_districtID);
module.exports = app;

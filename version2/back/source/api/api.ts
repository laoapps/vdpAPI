import { Application } from 'express';
import express from 'express';
import { UserConroller } from '../controllers/user.controller';
import { AuthorizeController } from '../controllers/authorize.controller';
import { categoryConroller } from '../controllers/category.controller';
import { unitConroller } from '../controllers/unit.controller';
import { productConroller } from '../controllers/product.controller';
import { StaffConroller } from '../controllers/staff.controller';
import { provinceConroller } from '../controllers/province.controller';
import { districtConroller } from '../controllers/district.controller';
import { villageConroller } from '../controllers/village.controller';

const app: Application = express();

//<=== Login ===>
app.post('/login', AuthorizeController.logIn);

//<=== User ===>
app.post('/addUser', UserConroller.add);
app.post('/updateUser', AuthorizeController.checkAuthorize, UserConroller.update);
app.post('/deleteUser', AuthorizeController.checkAuthorize, UserConroller.delete);
app.post('/listOneUser',   UserConroller.listOne);
app.post('/listPageUser',   UserConroller.listPage);
app.post('/listAllUser',   UserConroller.listAll);

app.get('/listOneUser',   UserConroller.listOne);
app.get('/listPageUser',   UserConroller.listPage);
app.get('/listAllUser',   UserConroller.listAll);

//<=== Category ===>
app.post('/addcat', AuthorizeController.checkAuthorize, categoryConroller.add);
app.post('/updatecat', AuthorizeController.checkAuthorize, categoryConroller.update);
app.post('/deletecat', AuthorizeController.checkAuthorize, categoryConroller.delete);
app.post('/listOnecat',   categoryConroller.listOne);
app.post('/listPagecat',   categoryConroller.listPage);
app.post('/listAllcat',   categoryConroller.listAll);
app.post('/getAutoIDcat',   categoryConroller.getAutoIDcat);

app.get('/listOnecat',   categoryConroller.listOne);
app.get('/listPagecat',   categoryConroller.listPage);
app.get('/listAllcat',   categoryConroller.listAll);
app.get('/getAutoIDcat',   categoryConroller.getAutoIDcat);


//<=== Unit ===>
app.post('/addunit', AuthorizeController.checkAuthorize, unitConroller.add);
app.post('/updateunit', AuthorizeController.checkAuthorize, unitConroller.update);
app.post('/deleteunit', AuthorizeController.checkAuthorize, unitConroller.delete);
app.post('/listOneunit',   unitConroller.listOne);
app.post('/listPageunit',   unitConroller.listPage);
app.post('/listAllunit',   unitConroller.listAll);
app.post('/getAutoIDunit',   unitConroller.getAutoIDunit);

app.get('/listOneunit',   unitConroller.listOne);
app.get('/listPageunit',   unitConroller.listPage);
app.get('/listAllunit',   unitConroller.listAll);
app.get('/getAutoIDunit',   unitConroller.getAutoIDunit);


//<=== Product ===>
app.post('/addproduct', AuthorizeController.checkAuthorize, productConroller.add);
app.post('/updateproduct', AuthorizeController.checkAuthorize, productConroller.update);
app.post('/deleteproduct', AuthorizeController.checkAuthorize, productConroller.delete);
app.post('/listOneproduct',   productConroller.listOne);
app.post('/listPageproduct',   productConroller.listPage);
app.post('/listAllproduct',   productConroller.listAll);
app.post('/getAutoIDproduct',   productConroller.getAutoIDproduct);
app.post('/listAllSbyid',   productConroller.listAllSbyid);

app.get('/listOneproduct',   productConroller.listOne);
app.get('/listPageproduct',   productConroller.listPage);
app.get('/listAllproduct',   productConroller.listAll);
app.get('/getAutoIDproduct',   productConroller.getAutoIDproduct);
app.get('/listAllSbyid',   productConroller.listAllSbyid);


//<=== Staff ===>
app.post('/addstaff', AuthorizeController.checkAuthorize, StaffConroller.add);
app.post('/updatestaff', AuthorizeController.checkAuthorize, StaffConroller.update);
app.post('/deletestaff', AuthorizeController.checkAuthorize, StaffConroller.delete);
app.post('/listOnestaff',   StaffConroller.listOne);
app.post('/listPagestaff',   StaffConroller.listPage);
app.post('/listAllstaff',   StaffConroller.listAll);
app.post('/getAutoID',   StaffConroller.getAutoID);

app.get('/listOnestaff',   StaffConroller.listOne);
app.get('/listPagestaff',   StaffConroller.listPage);
app.get('/listAllstaff',   StaffConroller.listAll);
app.get('/getAutoID',   StaffConroller.getAutoID);

//<=== province ===>
app.post('/addprovince', AuthorizeController.checkAuthorize, provinceConroller.add);
app.post('/updateprovince', AuthorizeController.checkAuthorize, provinceConroller.update);
app.post('/deleteprovince', AuthorizeController.checkAuthorize, provinceConroller.delete);
app.post('/listOneprovince',   provinceConroller.listOne);
app.post('/listPageprovince',   provinceConroller.listPage);
app.post('/listAllprovince',   provinceConroller.listAll);
app.post('/getAutoIDprovince',   provinceConroller.getAutoIDprovince);

app.get('/listOneprovince',   provinceConroller.listOne);
app.get('/listPageprovince',   provinceConroller.listPage);
app.get('/listAllprovince',   provinceConroller.listAll);
app.get('/getAutoIDprovince',   provinceConroller.getAutoIDprovince);

//<=== district ===>
app.post('/adddistrict', AuthorizeController.checkAuthorize, districtConroller.add);
app.post('/updatedistrict', AuthorizeController.checkAuthorize, districtConroller.update);
app.post('/deletedistrict', AuthorizeController.checkAuthorize, districtConroller.delete);
app.post('/listOnedistrict',   districtConroller.listOne);
app.post('/listPagedistrict',   districtConroller.listPage);
app.post('/listAlldistrict',   districtConroller.listAll);
app.post('/getAutoIDdistrict',   districtConroller.getAutoIDdistrict);

app.post('/getDistrict_by_provinceID',   districtConroller.getDistrict_by_provinceID);


app.get('/listOnedistrict',   districtConroller.listOne);
app.get('/listPagedistrict',   districtConroller.listPage);
app.get('/listAlldistrict',   districtConroller.listAll);
app.get('/getAutoIDdistrict',   districtConroller.getAutoIDdistrict);

app.get('/getDistrict_by_provinceID',   districtConroller.getDistrict_by_provinceID);




//<=== village ===>
app.post('/addvillage', AuthorizeController.checkAuthorize, villageConroller.add);
app.post('/updatevillage', AuthorizeController.checkAuthorize, villageConroller.update);
app.post('/deletevillage', AuthorizeController.checkAuthorize, villageConroller.delete);
app.post('/listOnevillage',  villageConroller.listOne);
app.post('/listPagevillage',  villageConroller.listPage);
app.post('/listAllvillage',  villageConroller.listAll);
app.post('/getAutoIDvillage', villageConroller.getAutoIDvillage);
app.post('/getVillage_by_districtID', villageConroller.getVillage_by_districtID);

app.get('/listOnevillage',  villageConroller.listOne);
app.get('/listPagevillage',  villageConroller.listPage);
app.get('/listAllvillage',  villageConroller.listAll);
app.get('/getAutoIDvillage', villageConroller.getAutoIDvillage);
app.get('/getVillage_by_districtID', villageConroller.getVillage_by_districtID);

export = app;




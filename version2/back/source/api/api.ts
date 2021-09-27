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

//<=== Category ===>
app.post('/addcat', AuthorizeController.checkAuthorize, categoryConroller.add);
app.post('/updatecat', AuthorizeController.checkAuthorize, categoryConroller.update);
app.post('/deletecat', AuthorizeController.checkAuthorize, categoryConroller.delete);
app.post('/listOnecat',   categoryConroller.listOne);
app.post('/listPagecat',   categoryConroller.listPage);
app.post('/listAllcat',   categoryConroller.listAll);
app.post('/getAutoIDcat',   categoryConroller.getAutoIDcat);



//<=== Unit ===>
app.post('/addunit', AuthorizeController.checkAuthorize, unitConroller.add);
app.post('/updateunit', AuthorizeController.checkAuthorize, unitConroller.update);
app.post('/deleteunit', AuthorizeController.checkAuthorize, unitConroller.delete);
app.post('/listOneunit',   unitConroller.listOne);
app.post('/listPageunit',   unitConroller.listPage);
app.post('/listAllunit',   unitConroller.listAll);
app.post('/getAutoIDunit',   unitConroller.getAutoIDunit);



//<=== Product ===>
app.post('/addproduct', AuthorizeController.checkAuthorize, productConroller.add);
app.post('/updateproduct', AuthorizeController.checkAuthorize, productConroller.update);
app.post('/deleteproduct', AuthorizeController.checkAuthorize, productConroller.delete);
app.post('/listOneproduct',   productConroller.listOne);
app.post('/listPageproduct',   productConroller.listPage);
app.post('/listAllproduct',   productConroller.listAll);
app.post('/getAutoIDproduct',   productConroller.getAutoIDproduct);
app.post('/listAllSbyid',   productConroller.listAllSbyid);



//<=== Staff ===>
app.post('/addstaff', AuthorizeController.checkAuthorize, StaffConroller.add);
app.post('/updatestaff', AuthorizeController.checkAuthorize, StaffConroller.update);
app.post('/deletestaff', AuthorizeController.checkAuthorize, StaffConroller.delete);
app.post('/listOnestaff',   StaffConroller.listOne);
app.post('/listPagestaff',   StaffConroller.listPage);
app.post('/listAllstaff',   StaffConroller.listAll);
app.post('/getAutoID',   StaffConroller.getAutoID);


//<=== province ===>
app.post('/addprovince', AuthorizeController.checkAuthorize, provinceConroller.add);
app.post('/updateprovince', AuthorizeController.checkAuthorize, provinceConroller.update);
app.post('/deleteprovince', AuthorizeController.checkAuthorize, provinceConroller.delete);
app.post('/listOneprovince',   provinceConroller.listOne);
app.post('/listPageprovince',   provinceConroller.listPage);
app.post('/listAllprovince',   provinceConroller.listAll);
app.post('/getAutoIDprovince',   provinceConroller.getAutoIDprovince);


//<=== district ===>
app.post('/adddistrict', AuthorizeController.checkAuthorize, districtConroller.add);
app.post('/updatedistrict', AuthorizeController.checkAuthorize, districtConroller.update);
app.post('/deletedistrict', AuthorizeController.checkAuthorize, districtConroller.delete);
app.post('/listOnedistrict',   districtConroller.listOne);
app.post('/listPagedistrict',   districtConroller.listPage);
app.post('/listAlldistrict',   districtConroller.listAll);
app.post('/getAutoIDdistrict',   districtConroller.getAutoIDdistrict);

app.post('/getDistrict_by_provinceID',   districtConroller.getDistrict_by_provinceID);




//<=== village ===>
app.post('/addvillage', AuthorizeController.checkAuthorize, villageConroller.add);
app.post('/updatevillage', AuthorizeController.checkAuthorize, villageConroller.update);
app.post('/deletevillage', AuthorizeController.checkAuthorize, villageConroller.delete);
app.post('/listOnevillage',  villageConroller.listOne);
app.post('/listPagevillage',  villageConroller.listPage);
app.post('/listAllvillage',  villageConroller.listAll);
app.post('/getAutoIDvillage', villageConroller.getAutoIDvillage);

app.post('/getVillage_by_districtID', villageConroller.getVillage_by_districtID);

export = app;




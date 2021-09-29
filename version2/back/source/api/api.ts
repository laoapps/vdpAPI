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
app.post('/listOneUser', AuthorizeController.checkAuthorize, UserConroller.listOne);
app.post('/listPageUser', AuthorizeController.checkAuthorize, UserConroller.listPage);
app.post('/listAllUser', AuthorizeController.checkAuthorize, UserConroller.listAll);

//<=== Category ===>
app.post('/addcat', AuthorizeController.checkAuthorize, categoryConroller.add);
app.post('/updatecat', AuthorizeController.checkAuthorize, categoryConroller.update);
app.post('/deletecat', AuthorizeController.checkAuthorize, categoryConroller.delete);
app.post('/listOnecat', AuthorizeController.checkAuthorize, categoryConroller.listOne);
app.post('/listPagecat', AuthorizeController.checkAuthorize, categoryConroller.listPage);
app.post('/listAllcat', AuthorizeController.checkAuthorize, categoryConroller.listAll);
app.post('/getAutoIDcat', AuthorizeController.checkAuthorize, categoryConroller.getAutoIDcat);



//<=== Unit ===>
app.post('/addunit', AuthorizeController.checkAuthorize, unitConroller.add);
app.post('/updateunit', AuthorizeController.checkAuthorize, unitConroller.update);
app.post('/deleteunit', AuthorizeController.checkAuthorize, unitConroller.delete);
app.post('/listOneunit', AuthorizeController.checkAuthorize, unitConroller.listOne);
app.post('/listPageunit', AuthorizeController.checkAuthorize, unitConroller.listPage);
app.post('/listAllunit', AuthorizeController.checkAuthorize, unitConroller.listAll);
app.post('/getAutoIDunit', AuthorizeController.checkAuthorize, unitConroller.getAutoIDunit);



//<=== Product ===>
app.post('/addproduct', AuthorizeController.checkAuthorize, productConroller.add);
app.post('/updateproduct', AuthorizeController.checkAuthorize, productConroller.update);
app.post('/deleteproduct', AuthorizeController.checkAuthorize, productConroller.delete);
app.post('/listOneproduct', AuthorizeController.checkAuthorize, productConroller.listOne);
app.post('/listPageproduct', AuthorizeController.checkAuthorize, productConroller.listPage);
app.post('/listAllproduct', AuthorizeController.checkAuthorize, productConroller.listAll);
app.post('/getAutoIDproduct', AuthorizeController.checkAuthorize, productConroller.getAutoIDproduct);
app.post('/listAllSbyid', AuthorizeController.checkAuthorize, productConroller.listAllSbyid);




//<=== Staff ===>
app.post('/addstaff', AuthorizeController.checkAuthorize, StaffConroller.add);
app.post('/updatestaff', AuthorizeController.checkAuthorize, StaffConroller.update);
app.post('/deletestaff', AuthorizeController.checkAuthorize, StaffConroller.delete);
app.post('/listOnestaff', AuthorizeController.checkAuthorize, StaffConroller.listOne);
app.post('/listPagestaff', AuthorizeController.checkAuthorize, StaffConroller.listPage);
app.post('/listAllstaff', AuthorizeController.checkAuthorize, StaffConroller.listAll);
app.post('/getAutoID', AuthorizeController.checkAuthorize, StaffConroller.getAutoID);


//<=== province ===>
app.post('/addprovince', AuthorizeController.checkAuthorize, provinceConroller.add);
app.post('/updateprovince', AuthorizeController.checkAuthorize, provinceConroller.update);
app.post('/deleteprovince', AuthorizeController.checkAuthorize, provinceConroller.delete);
app.post('/listPageprovince_by', AuthorizeController.checkAuthorize, provinceConroller.listPage_by);
app.post('/listPageprovince', AuthorizeController.checkAuthorize, provinceConroller.listPage);
app.post('/listAllprovince', AuthorizeController.checkAuthorize, provinceConroller.listAll);
app.post('/getAutoIDprovince', AuthorizeController.checkAuthorize, provinceConroller.getAutoIDprovince);


//<=== district ===>
app.post('/adddistrict', AuthorizeController.checkAuthorize, districtConroller.add);
app.post('/updatedistrict', AuthorizeController.checkAuthorize, districtConroller.update);
app.post('/deletedistrict', AuthorizeController.checkAuthorize, districtConroller.delete);
app.post('/listPagedis_by', AuthorizeController.checkAuthorize, districtConroller.listPage_by);
app.post('/listPagedistrict', AuthorizeController.checkAuthorize, districtConroller.listPage);
app.post('/listAlldistrict', AuthorizeController.checkAuthorize, districtConroller.listAll);
app.post('/getAutoIDdistrict', AuthorizeController.checkAuthorize, districtConroller.getAutoIDdistrict);
app.post('/listAllSbydid', AuthorizeController.checkAuthorize, districtConroller.listAllSbydid);


app.post('/getDistrict_by_provinceID', AuthorizeController.checkAuthorize, districtConroller.getDistrict_by_provinceID);




//<=== village ===>
app.post('/addvillage', AuthorizeController.checkAuthorize, villageConroller.add);
app.post('/updatevillage', AuthorizeController.checkAuthorize, villageConroller.update);
app.post('/deletevillage', AuthorizeController.checkAuthorize, villageConroller.delete);
app.post('/listPagevill_by', AuthorizeController.checkAuthorize, villageConroller.listPage_by);
app.post('/listPagevillage', AuthorizeController.checkAuthorize, villageConroller.listPage);
app.post('/listAllvillage', AuthorizeController.checkAuthorize, villageConroller.listAll);
app.post('/getAutoIDvillage', AuthorizeController.checkAuthorize, villageConroller.getAutoIDvillage);
app.post('/listAllSbyvid', AuthorizeController.checkAuthorize, villageConroller.listAllSbyvid);

app.post('/getVillage_by_districtID', AuthorizeController.checkAuthorize, villageConroller.getVillage_by_districtID);

export = app;




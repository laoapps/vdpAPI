import { Request, Response } from 'express';
import { StaffModel } from '../models/staff.model';
import { EMessage } from '../services/message';
import { Service } from '../services/services';
import { Databases } from './databases.controller';
import { ValidateController } from './validate.controller';
export class StaffConroller {

    public static add(req: Request, res: Response) {

        const data = req.body as StaffModel;
        const validate = StaffModel.validateAll(data);

        if (validate !== "true") {
            res.send(Service.respon([], validate, 0));
        } else {

            const sqlUsername = `select * from staff where st_name='${data.st_name}'`;
            ValidateController.alreadyExist(sqlUsername).then((result) => {

                if (result) {

                    const msg = "st_name: " + data.st_name + EMessage.alreadyExist;
                    res.send(Service.respon([], msg, 0));

                } else {
                  const imgName=Service.baseToimg(data.images,data.st_id);
console.log(imgName);

                  const sql = `insert into staff (st_id,st_name,dob,tel,village,district,province,images)
                  values ('${data.st_id}','${data.st_name}','${data.dob}','${data.tel}','${data.village}','${data.district}','${data.province}','${imgName}')`;
             Databases.insert(sql).then(result => {
                 res.send(result)            
                  
             });

                 

                   
                }
            })
        }
    }

    public static update(req: Request, res: Response) {

        const data = req.body as StaffModel;
        const validate = StaffModel.validateAll(data);

        if (!data.st_id) {
            res.send(Service.respon([], "id" + EMessage.empty, 0));
        } else if (validate !== "true") {
            res.send(Service.respon([], validate, 0));
            
        } else {
            const sqlstaffname = `select * from staff where st_name='${data.st_name}' and st_id!='${data.st_id}'`;
            ValidateController.alreadyExist(sqlstaffname).then((result) => {

                if (result) {

                    const msg = "Staffname: " + data.st_name + EMessage.alreadyExist;

                    res.send(Service.respon([], msg, 0));

                } else {
                   
                  //+++++++++++++++++++++change base64 to img and sent img_name to server+++++++++++++++++++++++++++++++++++++++++++++++
                   let imgName = "";
                  if(data.isLoad == true){
                       imgName=data.images.split('static/')[1];
                       console.log('ssssssssssssss',imgName);
                       
                    }else{
                       imgName=Service.baseToimg(data.images,data.st_id);
                    }
                    

                    const sql = `update staff set  st_name='${data.st_name}', dob='${data.dob}', tel='${data.tel}', village='${data.village}'
                    ,district='${data.district}',province='${data.province}',images='${imgName}' where st_id='${data.st_id}'`;
                    Databases.update(sql).then(result => {
                        res.send(result)
                    });
                }
            });
        }
    }

    public static delete(req: Request, res: Response) {

        const data = req.body as StaffModel;

        if (!data.st_id) {
            res.send(Service.respon([], "id" + EMessage.empty, 0));
        } else {

            const sql = `delete from staff where st_id='${data.st_id}'`;
            Databases.delete(sql).then(result => {
                res.send(result)
            });
        }
    }
    public static listOne(req: Request, res: Response) {

        const data = req.body as StaffModel;
            const sql = `select * from staff where st_name like'%${data.st_name}%'`;
            Databases.selectOne(sql).then(result => {
                res.send(result)
            });
        
    }
    public static listPage(req: Request, res: Response) {

        const data = req.body as StaffModel;
        const page = data.page ? data.page : 1;
        const limit = data.limit ? data.limit : 10;
        const offset = (page - 1) * limit;

        const sqlCount = "select count(*) as count from staff";
        const sqlPage = `select * from staff limit ${limit} offset ${offset} `;

        Databases.selectPage(sqlCount, sqlPage).then(result => {
            res.send(result)
        });
    }
    public static listAll(req: Request, res: Response) {

        const sql = `select * from staff order by st_id desc`;

        Databases.selectAll(sql).then(result => {
            res.send(result)
        });
    }
    public static getAutoID(req: Request, res: Response) {

        const sql = `select max(st_id) as st_id from staff`;

        Databases.getAutoID(sql).then(result => {
            res.send(result)
        });
    }

}

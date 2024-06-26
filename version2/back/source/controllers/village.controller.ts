import { Request, Response } from 'express';
import { villageModel } from '../models/village.model';
import { EMessage } from '../services/message';
import { Service } from '../services/services';
import { Databases } from './databases.controller';
import { ValidateController } from './validate.controller';
export class villageConroller {

    public static add(req: Request, res: Response) {

        const data = req.body as villageModel;
        const validate = villageModel.validateAll(data);
console.log(data);

        if (validate !== "true") {
            res.send(Service.respon([], validate, 0));
        } else {

            const sqlcatName = `select * from village where vill_name='${data.vill_name}' and dr_id = '${data.dr_id}'`;
            ValidateController.alreadyExist(sqlcatName).then((result) => {

                if (result) {

                    const msg = "vill_name: " + data.vill_name + EMessage.alreadyExist;
                    res.send(Service.respon([], msg, 0));

                } else {

                    const sql = `insert into village (vill_id,vill_name,vill_name_en,dr_id) values ('${data.vill_id}','${data.vill_name}','${data.vill_name_en}','${data.dr_id}')`;
                    Databases.insert(sql).then(result => {
                        res.send(result)
                    });
                }
            })
        }
    }
    public static update(req: Request, res: Response) {

      const data = req.body as villageModel;
      const validate = villageModel.validateAll(data);

      if (!data.vill_id) {
          res.send(Service.respon([], "vill_id" + EMessage.empty, 0));
      } else if (validate !== "true") {
          res.send(Service.respon([], validate, 0));
          // 
      } else {
          const sqlcategory = `select * from village where vill_name='${data.vill_name}' and vill_id!='${data.vill_id}' and dr_id = '${data.dr_id}'`;
          ValidateController.alreadyExist(sqlcategory).then((result) => {

              if (result) {

                  const msg = "vill_name: " + data.vill_name + EMessage.alreadyExist;

                  res.send(Service.respon([], msg, 0));
                  

              } else {
                  const sql = `update village set  vill_name='${data.vill_name}',vill_name_en='${data.vill_name_en}',dr_id='${data.dr_id}' where vill_id='${data.vill_id}'`;
                  Databases.update(sql).then(result => {
                      res.send(result)
                  });
              }
          });
      }
  }
    public static delete(req: Request, res: Response) {

      const data = req.body as villageModel;

      if (!data.vill_id) {
          res.send(Service.respon([], "vill_id" + EMessage.empty, 0));
      } else {

          const sql = `delete from village where vill_id='${data.vill_id}'`;
          Databases.delete(sql).then(result => {
              res.send(result)
          });
      }
  }

public static getVillage_by_districtID(req: Request, res: Response) {

    const data = req.body as villageModel;

        const sql = `select vill_id,vill_name from village v inner join dristric d on v.dr_id=d.dr_id where v.dr_id='${data.dr_id}'`;
        Databases.selectOne(sql).then(result => {
            res.send(result)
        });
}
public static listPage_by(req: Request, res: Response) {

    const data = req.body as villageModel;
    const page = data.page ? data.page : 1;
    const limit = data.limit ? data.limit : 10;
    const offset = (page - 1) * limit;

    const sqlCount = "select count(*) as count from village v inner join dristric d on v.dr_id=d.dr_id where vill_name like'%"+data.vill_name+"%' or vill_name_en like'%"+data.vill_name_en+"%' or dr_name like'%"+data.dr_name+"%' or dr_name_en like'%"+data.dr_name_en+"%'";
    const sqlPage = `select vill_id,vill_name,vill_name_en,dr_name,dr_name_en from village v inner join dristric d on v.dr_id=d.dr_id where vill_name like'%${data.vill_name}%' or vill_name_en like'%${data.vill_name_en}%' or dr_name like'%${data.dr_name}%' or dr_name_en like'%${data.dr_name_en}%' limit ${limit} offset ${offset} `;

    Databases.selectPage(sqlCount, sqlPage).then(result => {
        res.send(result)
    });
}
    public static listPage(req: Request, res: Response) {

      const data = req.body as villageModel;
      const page = data.page ? data.page : 1;
      const limit = data.limit ? data.limit : 10;
      const offset = (page - 1) * limit;

      const sqlCount = "select count(*) as count from village";
      const sqlPage = `select vill_id,vill_name,vill_name_en,dr_name,dr_name_en from village v inner join dristric d on v.dr_id=d.dr_id limit ${limit} offset ${offset} `;

      Databases.selectPage(sqlCount, sqlPage).then(result => {
          res.send(result)
      });
  }
  public static listAll(req: Request, res: Response) {

      const sql = `select * from village`;
      // order by cID desc

      Databases.selectAll(sql).then(result => {
          res.send(result)
      });
  }
  public static getAutoIDvillage(req: Request, res: Response) {

    const sql = `select max(vill_id) as vill_id from village`;

    Databases.getAutoID(sql).then(result => {
        res.send(result)
    });
}
public static listAllSbyvid(req: Request, res: Response) {

    const data = req.body as villageModel;
    const sql = `select * from village where vill_id='${data.vill_id}'`;
    Databases.selectOne(sql).then(result => {
        res.send(result)
    });
}
  }
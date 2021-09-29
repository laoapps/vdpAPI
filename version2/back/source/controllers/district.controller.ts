import { Request, Response } from 'express';
import { districtModel } from '../models/district.model';
import { EMessage } from '../services/message';
import { Service } from '../services/services';
import { Databases } from './databases.controller';
import { ValidateController } from './validate.controller';
export class districtConroller {

    public static add(req: Request, res: Response) {

        const data = req.body as districtModel;
        const validate = districtModel.validateAll(data);
console.log(data);

        if (validate !== "true") {
            res.send(Service.respon([], validate, 0));
        } else {

            const sqlcatName = `select * from dristric where dr_name='${data.dr_name}'`;
            ValidateController.alreadyExist(sqlcatName).then((result) => {

                if (result) {

                    const msg = "dr_name: " + data.dr_name + EMessage.alreadyExist;
                    res.send(Service.respon([], msg, 0));

                } else {

                    const sql = `insert into dristric (dr_id,dr_name,dr_name_en,pr_id) values ('${data.dr_id}','${data.dr_name}','${data.dr_name_en}','${data.pr_id}')`;
                    Databases.insert(sql).then(result => {
                        res.send(result)
                    });
                }
            })
        }
    }
    public static update(req: Request, res: Response) {

      const data = req.body as districtModel;
      const validate = districtModel.validateAll(data);

      if (!data.dr_id) {
          res.send(Service.respon([], "dr_id" + EMessage.empty, 0));
      } else if (validate !== "true") {
          res.send(Service.respon([], validate, 0));
          // 
      } else {
          const sqlcategory = `select * from dristric where dr_name='${data.dr_name}' and dr_id!='${data.dr_id}'`;
          ValidateController.alreadyExist(sqlcategory).then((result) => {

              if (result) {

                  const msg = "dr_name: " + data.dr_name + EMessage.alreadyExist;

                  res.send(Service.respon([], msg, 0));
                  

              } else {
                  const sql = `update dristric set  dr_name='${data.dr_name}',dr_name_en='${data.dr_name_en}',pr_id='${data.pr_id}' where dr_id='${data.dr_id}'`;
                  Databases.update(sql).then(result => {
                      res.send(result)
                  });
              }
          });
      }
  }
    public static delete(req: Request, res: Response) {

      const data = req.body as districtModel;

      if (!data.dr_id) {
          res.send(Service.respon([], "dr_id" + EMessage.empty, 0));
      } else {

          const sql = `delete from dristric where dr_id='${data.dr_id}'`;
          Databases.delete(sql).then(result => {
              res.send(result)
          });
      }
  }

  public static getDistrict_by_provinceID(req: Request, res: Response) {

    const data = req.body as districtModel;

        const sql = `select dr_id,dr_name from dristric d inner join province p on d.pr_id=p.pr_id where d.pr_id='${data.pr_id}'`;
        Databases.selectOne(sql).then(result => {
            res.send(result)
        });
}
    public static listPage(req: Request, res: Response) {

      const data = req.body as districtModel;
      const page = data.page ? data.page : 1;
      const limit = data.limit ? data.limit : 10;
      
      const offset = (page - 1) * limit;


      const sqlCount = "select count(*) as count from dristric";
      const sqlPage = `select dr_id,dr_name,dr_name_en,pr_name,pr_name_en from dristric d inner join province p on d.pr_id=p.pr_id limit ${limit} offset ${offset} `;

      Databases.selectPage(sqlCount, sqlPage).then(result => {
          res.send(result)
      });
  }
    public static listPage_by(req: Request, res: Response) {

      const data = req.body as districtModel;
      const page = data.page ? data.page : 1;
      const limit = data.limit ? data.limit : 10;
      const offset = (page - 1) * limit;

      const sqlCount = "select count(*) as count from dristric";
      const sqlPage = `select dr_id,dr_name,dr_name_en,pr_name,pr_name_en from dristric d inner join province p on d.pr_id=p.pr_id where dr_name like'%${data.dr_name}%' or dr_name_en like'%${data.dr_name_en}%' or pr_name like'%${data.pr_name}%' or pr_name_en like'%${data.pr_name_en}%' limit ${limit} offset ${offset} `;

      Databases.selectPage(sqlCount, sqlPage).then(result => {
          res.send(result)
      });
  }
  public static listAll(req: Request, res: Response) {

      const sql = `select * from dristric`;
      // order by cID desc

      Databases.selectAll(sql).then(result => {
          res.send(result)
      });
  }
  public static getAutoIDdistrict(req: Request, res: Response) {

    const sql = `select max(dr_id) as dr_id from dristric`;

    Databases.getAutoID(sql).then(result => {
        res.send(result)
    });
}
public static listAllSbydid(req: Request, res: Response) {

    const data = req.body as districtModel;
    const sql = `select * from dristric where dr_id='${data.dr_id}'`;
    Databases.selectOne(sql).then(result => {
        res.send(result)
    });
}
  }
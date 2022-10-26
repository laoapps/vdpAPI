import { Request, Response } from 'express';
import { unitModel } from '../models/unit.model';
import { EMessage } from '../services/message';
import { Service } from '../services/services';
import { Databases } from './databases.controller';
import { ValidateController } from './validate.controller';
export class unitConroller {

    public static add(req: Request, res: Response) {

        const data = req.body as unitModel;
        const validate = unitModel.validateAll(data);
console.log(data);

        if (validate !== "true") {
            res.send(Service.respon([], validate, 0));
        } else {

            const sqlunitName = `select * from unit where uName='${data.uName}'`;
            ValidateController.alreadyExist(sqlunitName).then((result) => {

                if (result) {

                    const msg = "unitName: " + data.uName + EMessage.alreadyExist;
                    res.send(Service.respon([], msg, 0));

                } else {

                    const sql = `insert into unit (uName) values ('${data.uName}')`;
                    Databases.insert(sql).then(result => {
                        res.send(result)
                    });
                }
            })
        }
    }
    public static update(req: Request, res: Response) {

      const data = req.body as unitModel;
      const validate = unitModel.validateAll(data);

      if (!data.id) {
          res.send(Service.respon([], "id" + EMessage.empty, 0));
      } else if (validate !== "true") {
          res.send(Service.respon([], validate, 0));
          
      } else {
          const sqlunitname = `select * from unit where uName='${data.uName}' and id!='${data.id}'`;
          ValidateController.alreadyExist(sqlunitname).then((result) => {

              if (result) {

                  const msg = "unitname: " + data.uName + EMessage.alreadyExist;

                  res.send(Service.respon([], msg, 0));
                  

              } else {
                  const sql = `update unit set  uName='${data.uName}' where id='${data.id}'`;
                  Databases.update(sql).then(result => {
                      res.send(result)
                  });
              }
          });
      }
  }
    public static delete(req: Request, res: Response) {

      const data = req.body as unitModel;

      if (!data.id) {
          res.send(Service.respon([], "id" + EMessage.empty, 0));
      } else {

          const sql = `delete from unit where id='${data.id}'`;
          Databases.delete(sql).then(result => {
              res.send(result)
          });
      }
  }
    public static listPage(req: Request, res: Response) {

      const data = req.body as unitModel;
      const page = data.page ? data.page : 1;
      const limit = data.limit ? data.limit : 10;
      const offset = (page - 1) * limit;


      const sqlCount = "select count(*) as count from unit";
      const sqlPage = `select * from unit limit ${limit} offset ${offset} `;

      Databases.selectPage(sqlCount, sqlPage).then(result => {
          res.send(result)
      });
  }
  public static listOne(req: Request, res: Response) {

    const data = req.body as unitModel;

        const sql = `select * from unit where uName like'%${data.uName}%'`;
        Databases.selectOne(sql).then(result => {
            res.send(result)
        });
}
  public static listAll(req: Request, res: Response) {

      const sql = `select * from unit`;
      // order by cID desc

      Databases.selectAll(sql).then(result => {
          res.send(result)
      });
  }
  public static getAutoIDunit(req: Request, res: Response) {

    const sql = `select max(id) as Uid from unit`;

    Databases.getAutoID(sql).then(result => {
        res.send(result)
    });
}
  }
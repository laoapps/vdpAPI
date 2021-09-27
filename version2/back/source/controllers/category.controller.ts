import { Request, Response } from 'express';
import { categoryModel } from '../models/category.model';
import { EMessage } from '../services/message';
import { Service } from '../services/services';
import { Databases } from './databases.controller';
import { ValidateController } from './validate.controller';
export class categoryConroller {

    public static add(req: Request, res: Response) {

        const data = req.body as categoryModel;
        const validate = categoryModel.validateAll(data);
console.log(data);

        if (validate !== "true") {
            res.send(Service.respon([], validate, 0));
        } else {

            const sqlcatName = `select * from category where cName='${data.cName}'`;
            ValidateController.alreadyExist(sqlcatName).then((result) => {

                if (result) {

                    const msg = "categoryName: " + data.cName + EMessage.alreadyExist;
                    res.send(Service.respon([], msg, 0));

                } else {

                    const sql = `insert into category (cName) values ('${data.cName}')`;
                    Databases.insert(sql).then(result => {
                        res.send(result)
                    });
                }
            })
        }
    }
    public static update(req: Request, res: Response) {

      const data = req.body as categoryModel;
      const validate = categoryModel.validateAll(data);

      if (!data.id) {
          res.send(Service.respon([], "id" + EMessage.empty, 0));
      } else if (validate !== "true") {
          res.send(Service.respon([], validate, 0));
          // 
      } else {
          const sqlcategory = `select * from category where cName='${data.cName}' and id!='${data.id}'`;
          ValidateController.alreadyExist(sqlcategory).then((result) => {

              if (result) {

                  const msg = "categoryname: " + data.cName + EMessage.alreadyExist;

                  res.send(Service.respon([], msg, 0));
                  

              } else {
                  const sql = `update category set  cName='${data.cName}' where id='${data.id}'`;
                  Databases.update(sql).then(result => {
                      res.send(result)
                  });
              }
          });
      }
  }
    public static delete(req: Request, res: Response) {

      const data = req.body as categoryModel;

      if (!data.id) {
          res.send(Service.respon([], "id" + EMessage.empty, 0));
      } else {

          const sql = `delete from category where id='${data.id}'`;
          Databases.delete(sql).then(result => {
              res.send(result)
          });
      }
  }
  public static listOne(req: Request, res: Response) {

    const data = req.body as categoryModel;

        const sql = `select * from category where cName like'%${data.cName}%'`;
        Databases.selectOne(sql).then(result => {
            res.send(result)
        });
}
    public static listPage(req: Request, res: Response) {

      const data = req.body as categoryModel;
      const page = data.page ? data.page : 1;
      const limit = data.limit ? data.limit : 10;
      const offset = (page - 1) * limit;

      const sqlCount = "select count(*) as count from category";
      const sqlPage = `select * from category limit ${limit} offset ${offset} `;

      Databases.selectPage(sqlCount, sqlPage).then(result => {
          res.send(result)
      });
  }
  public static listAll(req: Request, res: Response) {

      const sql = `select * from category`;
      // order by cID desc

      Databases.selectAll(sql).then(result => {
          res.send(result)
      });
  }
  public static getAutoIDcat(req: Request, res: Response) {

    const sql = `select max(id) as Cid from category`;

    Databases.getAutoID(sql).then(result => {
        res.send(result)
    });
}
  }
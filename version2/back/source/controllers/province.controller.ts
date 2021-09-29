import { Request, Response } from 'express';
import { provinceModel } from '../models/province.model';
import { EMessage } from '../services/message';
import { Service } from '../services/services';
import { Databases } from './databases.controller';
import { ValidateController } from './validate.controller';
export class provinceConroller {

    public static add(req: Request, res: Response) {

        const data = req.body as provinceModel;
        const validate = provinceModel.validateAll(data);
console.log(data);

        if (validate !== "true") {
            res.send(Service.respon([], validate, 0));
        } else {

            const sqlcatName = `select * from province where pr_name='${data.pr_name}'`;
            ValidateController.alreadyExist(sqlcatName).then((result) => {

                if (result) {

                    const msg = "pr_name: " + data.pr_name + EMessage.alreadyExist;
                    res.send(Service.respon([], msg, 0));

                } else {

                    const sql = `insert into province (pr_id,pr_name,pr_name_en) values ('${data.pr_id}','${data.pr_name}','${data.pr_name_en}')`;
                    Databases.insert(sql).then(result => {
                        res.send(result)
                    });
                }
            })
        }
    }
    public static update(req: Request, res: Response) {

      const data = req.body as provinceModel;
      const validate = provinceModel.validateAll(data);

      if (!data.pr_id) {
          res.send(Service.respon([], "pr_id" + EMessage.empty, 0));
      } else if (validate !== "true") {
          res.send(Service.respon([], validate, 0));
          // 
      } else {
          const sqlcategory = `select * from province where pr_name='${data.pr_name}' and pr_id!='${data.pr_id}'`;
          ValidateController.alreadyExist(sqlcategory).then((result) => {

              if (result) {

                  const msg = "pr_name: " + data.pr_name + EMessage.alreadyExist;

                  res.send(Service.respon([], msg, 0));
                  

              } else {
                  const sql = `update province set  pr_name='${data.pr_name}',pr_name_en='${data.pr_name_en}' where pr_id='${data.pr_id}'`;
                  Databases.update(sql).then(result => {
                      res.send(result)
                  });
              }
          });
      }
  }
    public static delete(req: Request, res: Response) {

      const data = req.body as provinceModel;

      if (!data.pr_id) {
          res.send(Service.respon([], "id" + EMessage.empty, 0));
      } else {

          const sql = `delete from province where pr_id='${data.pr_id}'`;
          Databases.delete(sql).then(result => {
              res.send(result)
          });
      }
  }
  public static listOne(req: Request, res: Response) {

    const data = req.body as provinceModel;

        const sql = `select * from province where pr_name like'%${data.pr_name}%' or pr_name_en like'%${data.pr_name_en}%' or pr_id like'%${data.pr_id}%'`;
        Databases.selectOne(sql).then(result => {
            res.send(result)
        });
}
    public static listPage(req: Request, res: Response) {

      const  data = req.body as provinceModel;
      let page = 1;
      let limit = 10;
      if(data){
        page = data.page ? data.page : 1;
        limit = data.limit ? data.limit : 10;
      }else{
          page = req.query['page']?Number(req.query['page']):page;
          limit =  req.query['limit']?Number(req.query['limit']):limit;
      }
      
      const offset = (page - 1) * limit;

      const sqlCount = "select count(*) as count from province";
      const sqlPage = `select * from province limit ${limit} offset ${offset} `;

      Databases.selectPage(sqlCount, sqlPage).then(result => {
          res.send(result)
      });
  }
  public static listAll(req: Request, res: Response) {

      const sql = `select * from province`;
      // order by cID desc

      Databases.selectAll(sql).then(result => {
          res.send(result)
      });
  }
  public static getAutoIDprovince(req: Request, res: Response) {

    const sql = `select max(pr_id) as pr_id from province`;

    Databases.getAutoID(sql).then(result => {
        res.send(result)
    });
}
  }
import { Request, Response } from 'express';
import { productModel } from '../models/product.model';
import { EMessage } from '../services/message';
import { Service } from '../services/services';
import { Databases } from './databases.controller';
import { ValidateController } from './validate.controller';
export class productConroller {

    public static add(req: Request, res: Response) {

        const data = req.body as productModel;
        const validate = productModel.validateAll(data);
console.log(data);

        if (validate !== "true") {
            res.send(Service.respon([], validate, 0));
        } else {

            const sqlproductName = `select * from product where pName='${data.pName}'`;
            ValidateController.alreadyExist(sqlproductName).then((result) => {

                if (result) {

                    const msg = "porductName: " + data.pName + EMessage.alreadyExist;
                    res.send(Service.respon([], msg, 0));

                } else {

                    const sql = `insert into product (pName,cID,uID,sellprice,orderprice,qty) 
                    values ('${data.pName}','${data.cID}','${data.uID}','${data.sellprice}','${data.orderprice}','${data.qty}')`;
                    Databases.insert(sql).then(result => {
                        res.send(result)
                    });
                }
            })
        }
    }
    public static update(req: Request, res: Response) {

      const data = req.body as productModel;
      const validate = productModel.validateAll(data);

      if (!data.id) {
          res.send(Service.respon([], "id" + EMessage.empty, 0));
      } else if (validate !== "true") {
          res.send(Service.respon([], validate, 0));
          // 
      } else {
          const sqlunitname = `select * from product where pName='${data.pName}' and id!='${data.id}'`;
          ValidateController.alreadyExist(sqlunitname).then((result) => {

              if (result) {

                  const msg = "productname: " + data.pName + EMessage.alreadyExist;

                  res.send(Service.respon([], msg, 0));
                  

              } else {
                  const sql = `update product set  pName='${data.pName}', cID='${data.cID}', uID='${data.uID}', sellprice='${data.sellprice}'
                  ,orderprice='${data.orderprice}',qty='${data.qty}' where id='${data.id}'`;
                  Databases.update(sql).then(result => {
                      res.send(result)
                  });
              }
          });
      }
  }
    public static delete(req: Request, res: Response) {

      const data = req.body as productModel;

      if (!data.id) {
          res.send(Service.respon([], "id" + EMessage.empty, 0));
      } else {

          const sql = `delete from product where id='${data.id}'`;
          Databases.delete(sql).then(result => {
              res.send(result)
          });
      }
  }
  public static listOne(req: Request, res: Response) {

    const data = req.body as productModel;

        const sql = `select * from product where pName like'%${data.pName}%'`;
        Databases.selectOne(sql).then(result => {
            res.send(result)
        });
}
    public static listPage(req: Request, res: Response) {

      const data = req.body as productModel;
      const page = data.page ? data.page : 1;
      const limit = data.limit ? data.limit : 10;
      const offset = (page - 1) * limit;

      const sqlCount = "select count(*) as count from product";
      // const sqlPage = `select * from product limit ${limit} offset ${offset} `;
      const sqlPage = `select p.id,pName,cName,uName,sellprice,orderprice,qty from product p inner join
       category c on p.cID=c.id inner join unit u on p.uID=u.id limit ${limit} offset ${offset} `;

      Databases.selectPage(sqlCount, sqlPage).then(result => {
          res.send(result)
      });
  }
  public static listAll(req: Request, res: Response) {

      const sql = `select p.id,pName,cName,uName,sellprice,orderprice,qty from product p inner join
      category c on p.cID=c.cID inner join unit u on p.uID=u.id`;
      // order by cID desc

      Databases.selectAll(sql).then(result => {
          res.send(result)
      });
  }
  public static listAllSbyid(req: Request, res: Response) {

    const data = req.body as productModel;
    const sql = `select * from product where id='${data.id}'`;
    Databases.selectOne(sql).then(result => {
        res.send(result)
    });
}
  public static getAutoIDproduct(req: Request, res: Response) {

    const sql = `select max(id) as Pid from product`;

    Databases.getAutoID(sql).then(result => {
        res.send(result)
    });
}
  }
import { Request, Response, NextFunction, Router, Application, query } from 'express';
import { Op } from 'sequelize';
import * as bcryptjs from 'bcryptjs';
import moment from 'moment';
import { dbConnection, VDPEntity } from '../models';
import { IVDP } from '../models/vdp.model';
import { EMessage, PrintError, PrintSucceeded } from '../services/service';
export class VDPController {

    //post
    static Insert(req: Request, res: Response) {
        const pdv = req.body as IVDP;
        VDPController.InsertPDV(pdv).then(r=>{
            res.send(PrintSucceeded(r,EMessage.insertsucceeded));
        }).catch(e=>{
            res.send(PrintError(e,EMessage.inserterror));
        });
    }
    public static InsertPDV(vdp: IVDP): Promise<IVDP> {
        return new Promise<IVDP>(async (resolve, reject) => {
            try {
                VDPController.countPDV(vdp).then(r => {
                    if(!r){
                        VDPEntity.create().then(r => {
                            resolve(r);
                        }).catch(e => {
                            reject(e);
                        });
                    }else{
                        throw new Error('PDV '+EMessage.exist);
                    }
                    
                }).catch(ex => {
                    throw ex;
                })
            } catch (error) {
                reject(error);
            }

        });
    }
    public static countPDV(vdp: IVDP): Promise<number> {
        return new Promise<number>(async (resolve, reject) => {
            try {
                const v = await VDPEntity.count(
                    {
                        where: {
                            parent: vdp.parent,
                            [Op.or]: [{ fullname: vdp.fullname }, { name: vdp.name }, { shortname: vdp.shortname }]
                        }
                    });
                resolve(v);
            } catch (error) {
                reject(error);
            }
        });
       
    }
    
    // patch , param
    static Update(req: Request, res: Response) {
        const pdv = req.body as IVDP;
        const id = req.params['id'];
    }
    // delete , param
    static Delete(req: Request, res: Response) {
        const id = req.params['id'];
    }
    // param
    static SelectOne(req: Request, res: Response) {
        const id = req.params['id'];
    }
    // param
    static SelectMany(req: Request, res: Response) {
        const id = req.params['ids'];
    }
    // query
    static FindOne(req: Request, res: Response) {
        const name = req.query['name'];
    }
    // query
    static FindMany(req: Request, res: Response) {
        const name = req.query['names'];
    }
    // query
    static FindOneByParent(req: Request, res: Response) {
        const name = req.query['name'];
        const parent = req.query['parent'];
    }
    // query
    static FindManyByParent(req: Request, res: Response) {
        const name = req.query['name'];
        const parent = req.query['parent'];
    }
}
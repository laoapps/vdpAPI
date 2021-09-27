import { Request, Response, NextFunction, Router, Application, query } from 'express';
import { Op } from 'sequelize';
import * as bcryptjs from 'bcryptjs';
import moment from 'moment';
import { dbConnection, VDPEntity } from '../models';
import { IVDP } from '../models/vdp.model';
import { EMessage, PrintError, PrintSucceeded } from '../services/service';
import { VDPControllerNew } from './vdpNew/vdp.controller.new';
import { VDPControllerEdit } from './vdpEdit/vdp.controller.edit';
import { VDPControllerDel } from './vdpDelete/vdp.controller.del';
export class VDPController {

    //post
    // for restfull

    static Insert(req: Request, res: Response) {
        const pdv = req.body as IVDP;
        VDPControllerNew.InsertPDV(pdv).then(r => {
            res.send(PrintSucceeded(r, EMessage.insertsucceeded));
        }).catch(e => {
            res.send(PrintError(e, EMessage.inserterror));
        });
    }

    // patch , param
    // /:id
    static Update(req: Request, res: Response) {
        try {
            const pdv = req.body as IVDP;
            const id = Number.parseInt(req.params['id']);
            VDPControllerEdit.updatePDV(pdv, id).then(r => {
                res.send(PrintSucceeded(r, EMessage.updatesucceeded));
            }).catch(e => {
                res.send(PrintError(e, EMessage.updateerror));
            });
        } catch (error) {
            res.send(PrintError(error, EMessage.updateerror));
        }
    }
    // delete , param
    //:id
    static Delete(req: Request, res: Response) {
        const id = Number.parseInt(req.params['id']);
        VDPControllerDel.deleteVDP( id).then(r => {
            res.send(PrintSucceeded(r, EMessage.deletingsucceeded));
        }).catch(e => {
            res.send(PrintError(e, EMessage.deletingerror));
        });
    }
    // param
    static SelectOne(req: Request, res: Response) {
        try {
            const id = req.params['id'];
            VDPEntity.findByPk(id).then(r => {
                if (r)
                    res.send(PrintSucceeded(r, EMessage.succeeded));
                else
                    res.send(PrintError(null, EMessage.notfound));
            }).catch(e => {
                throw e;
            })
        } catch (error) {
            res.send(PrintError(error, error.message));
        }

    }
    // param
    static SelectMany(req: Request, res: Response) {
        try {
            const ids = req.params['ids'] as unknown as Array<number>;
            try {
                if (ids.length) {
                    VDPEntity.findAndCountAll({ where: { id: ids } }).then(r => {
                        if (r.count)
                            res.send(PrintSucceeded(r, EMessage.succeeded));
                        else
                            res.send(PrintError(null, EMessage.notfound));
                    }).catch(e => {
                        throw e;
                    })
                } else {

                }

            } catch (error) {
                res.send(PrintError(error, error.message));
            }
        } catch (error) {
            res.send(PrintError(error, error.message));
        }

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
    // query 
    static FindChildren(req:Request,res:Response){
        
    }
}
import Op from "sequelize/types/lib/operators";
import { VDPEntity } from "../../models";
import { IVDP } from "../../models/vdp.model";
import { EMessage, PrintError } from "../../services/service";

export class VDPControllerNew{
    public static InsertPDV(vdp: IVDP={}as IVDP): Promise<IVDP> {
        return new Promise<IVDP>(async (resolve, reject) => {
            try {
                // check if parent is exist
                if(vdp.parent){
                    // find parent if exist in database, by name
                    const p = await VDPControllerNew.findParent(vdp.parent);
                    if(p){
                        // if parent exist 
                        VDPControllerNew.countPDV(vdp).then(r => {
                            if(r){
                                // insert a child with exist parent
                                VDPEntity.create().then(r => {
                                    resolve(r);
                                }).catch(e => {
                                    reject(e);
                                });
                            }else{
                                throw new Error('PDV parent '+EMessage.notfound);
                            }
                            
                        }).catch(ex => {
                            throw ex;
                        });
                    }else{
                        // if could not find parent
                        reject(PrintError(null,'parent '+EMessage.notfound))
                    }
                   
                }else{
                     // if not exist insert as parent
                     // count if exist pdv name or full name or short name
                     VDPControllerNew.countPDVAsParent(vdp).then(r => {
                        if(!r){
                            // if not exist then create new
                            VDPEntity.create().then(r => {
                                resolve(r);
                            }).catch(e => {
                                reject(e);
                            });
                        }else{
                            // if exist then throw error 
                            throw new Error('PDV '+EMessage.exist);
                        }
                        
                    }).catch(ex => {
                        throw ex;
                    });
                }
                
            } catch (error) {
                reject(error);
            }

        });
    }
    public static findParent(p:string): Promise<number> {
        return new Promise<number>(async (resolve, reject) => {
            try {
                const v = await VDPEntity.count(
                    {
                        where: {
                            name: p
                        }
                    });
                resolve(v);
            } catch (error) {
                reject(error);
            }
        });
       
    }
    public static countPDVAsParent(vdp: IVDP): Promise<number> {
        return new Promise<number>(async (resolve, reject) => {
            try {
                const v = await VDPEntity.count(
                    {
                        where: {
                             parent: "", // as a parent , top parent must be empty
                            [Op.or]: [{ fullname: vdp.fullname }, { name: vdp.name }, { shortname: vdp.shortname }]
                        }
                    });
                resolve(v);
            } catch (error) {
                reject(error);
            }
        });
       
    }
    public static countPDV(vdp: IVDP): Promise<number> {
        return new Promise<number>(async (resolve, reject) => {
            try {
                // count member of given parent
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

}
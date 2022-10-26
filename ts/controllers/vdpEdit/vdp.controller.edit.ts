import { VDPEntity } from "../../models";
import { IVDP } from "../../models/vdp.model";
import { EMessage } from "../../services/service";

export class VDPControllerEdit{

    public static updatePDV(vdp: IVDP={}as IVDP,id:number): Promise<IVDP> {
        return new Promise<IVDP>(async (resolve, reject) => {
            try {
                // find exist PDV by id
                VDPEntity.findByPk(id).then(async r=>{
                    if(r){  
                        for (const key in r) {
                            if (Object.prototype.hasOwnProperty.call(r, key)) {
                                // const element = r[key];
                                r[key]=vdp[key];
                            }
                        }
                        resolve (await r.save());
                    }else{
                        throw new Error('PDV ID '+EMessage.notfound);
                    }
                }).catch(e=>{
                    reject(e);
                })

                
            } catch (error) {
                reject(error);
            }

        });
    }
}
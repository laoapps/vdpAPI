import { where } from "sequelize/types";
import { VDPEntity } from "../../models";
import { EMessage } from "../../services/service";

export class VDPControllerDel{
    public static deleteVDP(id:number): Promise<number> {
        return new Promise<number>(async (resolve, reject) => {
            try {
                // find exist PDV by id
                VDPEntity.destroy({where:{id}}).then(async r=>{
                    if(r){  
                        
                        resolve (r);
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
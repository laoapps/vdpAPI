import { EMessage } from '../services/message';
export class productModel {
    id:number;
    pName:string;
    cID:number;
    uID: number;
    sellprice:number;
    orderprice:number;
    qty:number;


    page: number;
    limit: number;

    public static validateAll(data: productModel): string {

        if (Object.keys(data).length === 0) {
            return EMessage.objEmpty;
        }
        if (!data.pName) {
            return "pName" + EMessage.empty;
        }
        if (!data.cID) {
            return "cID" + EMessage.empty;
        }
        if (!data.uID) {
            return "uID" + EMessage.empty;
        }
        if (!data.sellprice) {
            return "sellprice" + EMessage.empty;
        }
        if (!data.orderprice) {
            return "orderprice" + EMessage.empty;
        }
        if (!data.qty) {
            return "qty" + EMessage.empty;
        }
        return "true";
    }
}
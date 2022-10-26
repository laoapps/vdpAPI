import { EMessage } from '../services/message';
export class unitModel {
    id:number;
    uName: string;


    page: number;
    limit: number;

    public static validateAll(data: unitModel): string {

        if (Object.keys(data).length === 0) {
            return EMessage.objEmpty;
        }
        if (!data.uName) {
            return "uName" + EMessage.empty;
        }
        return "true";
    }
}
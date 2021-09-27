import { ValidateController } from '../controllers/validate.controller';
import { EMessage } from '../services/message';
export class categoryModel {
    id: number;
    cName: string;


    page: number;
    limit: number;

    public static validateAll(data: categoryModel): string {

        if (Object.keys(data).length === 0) {
            return EMessage.objEmpty;
        }
        if (!data.cName) {
            return "catName" + EMessage.empty;
        }
        return "true";
    }
}

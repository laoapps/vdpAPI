import { ValidateController } from '../controllers/validate.controller';
import { EMessage } from '../services/message';
export class UserModel {
    // id: number;
    id: number;
    username: string;
    password: string;

    page: number;
    limit: number;

    public static validateAll(data: UserModel): string {

        if (Object.keys(data).length === 0) {
            return EMessage.objEmpty;
        }
        if (!data.username) {
            return "username" + EMessage.empty;
        }
        if (!data.password) {
            return "password" + EMessage.empty;
        }
        return "true";
    }
}

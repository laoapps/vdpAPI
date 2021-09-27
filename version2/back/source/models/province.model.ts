import { EMessage } from '../services/message';
export class provinceModel {
    pr_id: number;
    pr_name: string;
    pr_name_en: string;


    page: number;
    limit: number;

    public static validateAll(data: provinceModel): string {

        if (Object.keys(data).length === 0) {
            return EMessage.objEmpty;
        }
        if (!data.pr_id) {
            return "pr_id" + EMessage.empty;
        }
        if (!data.pr_name) {
            return "pr_name" + EMessage.empty;
        }
        return "true";
    }
}

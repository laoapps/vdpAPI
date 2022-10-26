import { EMessage } from '../services/message';
export class districtModel {
    dr_id: number;
    dr_name: string;
    dr_name_en: string;
    pr_id: number;

    pr_name: string;
    pr_name_en: string;

    page: number;
    limit: number;

    public static validateAll(data: districtModel): string {

        if (Object.keys(data).length === 0) {
            return EMessage.objEmpty;
        }
        if (!data.pr_id) {
            return "pr_id" + EMessage.empty;
        }
        if (!data.dr_id) {
            return "dr_id" + EMessage.empty;
        }
        if (!data.dr_name) {
            return "dr_name" + EMessage.empty;
        }
        return "true";
    }
}
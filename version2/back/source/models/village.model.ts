import { EMessage } from '../services/message';
export class villageModel {
    vill_id: number;
    vill_name: string;
    vill_name_en: string;
    dr_id: number;

    dr_name: string;
    dr_name_en: string;

    page: number;
    limit: number;

    public static validateAll(data: villageModel): string {

        if (Object.keys(data).length === 0) {
            return EMessage.objEmpty;
        }
        if (!data.vill_id) {
            return "vill_id" + EMessage.empty;
        }
        if (!data.dr_id) {
            return "dr_id" + EMessage.empty;
        }
        if (!data.vill_name) {
            return "vill_name" + EMessage.empty;
        }
        return "true";
    }
}
import { EMessage } from '../services/message';
export class StaffModel {
    // id: number;
    st_id: string;
    st_name: string;
    dob: Date;
    tel:string;
    village:string;
    district: string;
    province: string;
    images: string;
    isLoad:boolean;

    page: number;
    limit: number;

    public static validateAll(data: StaffModel): string {

        if (Object.keys(data).length === 0) {
            return EMessage.objEmpty;
        }
        if (!data.st_name) {
            return "username" + EMessage.empty;
        }
        // if (!data.dob) {
        //     return "date of birth" + EMessage.empty;
        // }
        if (!data.tel) {
          return "tel" + EMessage.empty;
      }
//       if (!data.village) {
//         return "Ban" + EMessage.empty;
//     }
//     if (!data.district) {
//       return "district" + EMessage.empty;
//   }
//   if (!data.province) {
//     return "province" + EMessage.empty;
// }
        return "true";
    }
}
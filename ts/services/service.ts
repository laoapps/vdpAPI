export function PrintSucceeded(data:any,message:string,code:string='0'):IResModel{
    return {
        data,message,code,status:1
    } as IResModel;
}
export function PrintError(data:any,message:string,code:string='0'):IResModel{
    return {
        data,message,code,status:0
    } as IResModel;
}

export interface IResModel{
    data:any;
    message:string;
    status:number;
    code:string;
}
export enum EMessage{
    succeeded='succeeded',
    error = 'error',
    insertsucceeded='inserting succeeded',
    inserterror = 'inserting error',
    updatesucceeded='updating succeeded',
    updateerror = 'updating error',
    deletingsucceeded='deleting succeeded',
    deletingerror = 'deleting error',
    notfound = 'not found',
    exist  = 'exist'
}
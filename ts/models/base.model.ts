export interface IGPSLocation{
    lat:number;
    lng:number;
    alt:number;
}
export interface IBase{
    id?:number;
    uuid?:string;
    isActive?:boolean;
    location?:IGPSLocation;
    polygon?:Array<IGPSLocation>;
    parent?:string;
    createdAt?:Date;
    updatedAt?:Date;
    deletedAt?:Date;
}
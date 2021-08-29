export interface IGPSLocation{
    lat:number;
    lng:number;
    alt:number;
}
export interface IBase{
    id?:number;
    uuid?:string;
    location?:IGPSLocation;
    polygon?:Array<IGPSLocation>;
    parent?:string;
    createdAt?:string;
    updatedAt?:string;
    deletedAt?:string;
}
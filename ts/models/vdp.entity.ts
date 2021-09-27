import { BuildOptions, DataTypes, DATE, JSONB, Model, ModelAttributes, Sequelize } from "sequelize";

import { IVDP } from './vdp.model';

interface VDPAttribute extends IVDP {
}

export interface VDPModel extends Model<VDPAttribute>, VDPAttribute {

}
export class VDP extends Model<VDPModel, VDPAttribute> { }
export type VDPStatic = typeof Model & {
    new(values?: object, options?: BuildOptions): VDPModel;
};
export const VDPFactory = (name: string, sequelize: Sequelize): VDPStatic => {
    const attributes: ModelAttributes<VDPModel> = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            unique: true,
            autoIncrement: true,
            autoIncrementIdentity: true
        },
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        location: {
            type: DataTypes.JSONB,
        },//IGPSLocation;
        polygon: {
            type: DataTypes.JSONB,
        },
        parent: {
            type: DataTypes.STRING,
            defaultValue:""
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue:DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue:DataTypes.NOW,
        },
        deletedAt: {
            type: DataTypes.DATE,
        },
        fullname: {
            type: DataTypes.STRING,
        },
        shortname: {
            type: DataTypes.STRING,
        },
        name: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.TEXT,
        }
    } as ModelAttributes<VDPModel>;
    
let x =sequelize.define(name, attributes, { tableName: name, freezeTableName: true });
x.beforeUpdate(async (vdp,options)=>{
    if( vdp.changed('uuid')) {
        vdp.uuid =vdp.previous().uuid;
    }
    if( vdp.changed('id')) {
        vdp.id =vdp.previous().id;
    }
    vdp.createdAt = vdp.previous().createdAt;
    vdp.updatedAt=new Date();
})
return x;
}
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
        location: {
            type: DataTypes.JSONB,
        },//IGPSLocation;
        polygon: {
            type: DataTypes.JSONB,
        },
        parent: {
            type: DataTypes.STRING,
        },
        createdAt: {
            type: DataTypes.STRING,
        },
        updatedAt: {
            type: DataTypes.DATE,
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
return x;
}
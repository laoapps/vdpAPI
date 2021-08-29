import * as sequelize from "sequelize";
import {VDPFactory} from './vdp.entity';

export const dbConnection = new sequelize.Sequelize(
    (process.env.DB_NAME = "VDPAPI"),
    (process.env.DB_USER = "postgres"),
    (process.env.DB_PASSWORD = "123456"),
    {
        port: Number(process.env.DB_PORT) || 5433,
        host: process.env.DB_HOST || "localhost",
        dialect: "postgres",
        pool: {
            min: 0,
            max: 5,
            acquire: 30000,
            idle: 10000,
        },
    }
);
export const VDPEntity =  VDPFactory('VDP',dbConnection);
VDPEntity.sync({force:true});
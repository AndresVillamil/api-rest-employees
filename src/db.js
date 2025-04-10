import { createPool } from "mysql2/promise";
import { 
    PORT,
    DB_HOST,
    DB_USER,
    DB_PASSWOR,
    DB_DATABASE,
    DB_PORT
     } from "./config.js";


export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWOR,
    port: DB_PORT,
    database: DB_DATABASE
})

import sqlite3 from 'sqlite3';
import { open } from 'sqlite';



export const openDB = async () => {
    return open({
        filename: 'src/app/Data/products.db', 
        driver: sqlite3.Database, 
    });
};

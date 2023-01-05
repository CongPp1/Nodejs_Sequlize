const DB = require('pg').Pool;

const db = new DB({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: 'giathinh1996',
    database: 'postgres'
})

module.exports = db;
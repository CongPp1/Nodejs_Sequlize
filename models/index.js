const dbConfig = require('../config/dbconfig');

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'giathinh1996',
    port: 5432 
}); // Example for postgres

sequelize.authenticate()
.then(() => {
    console.log('Database has connected successfully!');
})
.catch(() => {
    console.log('Connection failed!');
})

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize; // tham chieu den doi tuong sequelize da tao truoc do.

db.Employee = require('./employeeModel')(sequelize, DataTypes);

//Đồng bộ hóa các model với cơ sở dữ liệu:
db.sequelize.sync({force: false}).then(()=>{
    console.log('Re-sync done!');
});

module.exports = db;



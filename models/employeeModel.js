module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define('employeeSequelize', {
        employee_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autuIncrement: true,
            primaryKey: true
        },
        employee_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        birthday: {
            type: DataTypes.DATE,
            allowNull: false
        },
        employee_position: {
            type: DataTypes.STRING,
            allowNull: true
        },
        entry_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })

    return Employee;
}
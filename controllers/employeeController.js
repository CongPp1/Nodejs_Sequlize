//create main model:
const { Employee } = require('../models')

//create APIs:
const getAllEmloyees = async (req, res) => {
    const employee = await Employee.findAll();
    if (employee === null) {
        res.status(400).send('Data is emty!');
    } else {
        res.status(200).send(employee);
        console.log(employee);
    }
}

const getEmployeeById = async (req, res) => {
    const id = req.params.id;
    const employee = await Employee.findOne({ where: { employee_id: id } });
    if (employee === null) {
        res.status(400).send('Employee does not exists!');
    } else {
        res.status(200).send(employee);
        console.log(employee);
    }
}

const addNewEmployee = async (req, res) => {
    const employeeInfo = {
        employee_id: req.body.employee_id,
        employee_name: req.body.employee_name,
        birthday: req.body.birthday,
        employee_position: req.body.employee_position,
        entry_date: req.body.entry_date,
        email: req.body.email,
        createdAt: req.body.createdAt,
        updatedAt: req.body.updatedAt
    }
    let response;
    switch (true) {
        case !employeeInfo.employee_id:
            response = {
                status: 400,
                message: 'Employee created fail. Please enter employee id'
            };
            break;
        case !employeeInfo.employee_name:
            response = {
                status: 400,
                message: 'Employee created fail. Please enter employee name'
            };
            break;
        case !employeeInfo.birthday:
            response = {
                status: 400,
                message: 'Employee created fail. Please enter birthday'
            };
            break;
        case !employeeInfo.employee_position:
            response = {
                status: 400,
                message: 'Employee created fail. Please enter employee position'
            };
            break;
        case !employeeInfo.entry_date:
            response = {
                status: 400,
                message: 'Employee created fail. Please enter entry date'
            };
            break;
        case !employeeInfo.email:
            response = {
                status: 400,
                message: 'Employee created fail. Please enter email'
            };
            break;
        case !employeeInfo.createdAt:
            response = {
                status: 400,
                message: 'Employee created fail. Please enter createdAt date'
            };
            break;
        case !employeeInfo.updatedAt:
            response = {
                status: 400,
                message: 'Employee created fail. Please enter updatedAt date'
            };
            break;
        default:
            const employee = await Employee.create(employeeInfo);
            response = {
                status: 201,
                data: employee
            };
            break;
    }
    res.status(response.status).send(response.message || response.data);
}

const updateEmployeeBiId = async (req, res) => {
    const id = req.params.id;
    const employee = await Employee.update(req.body, { where: { employee_id: id } });
    if (employee === null) {
        res.status(400).send('Employee does not exists!');
    } else {
        res.status(200).send(employee);
        console.log(employee);
    }
}

const deleteEmployeeById = async (req, res) => {
    const id = req.params.id;
    const employee = await Employee.destroy({ where: { employee_id: id } });
    if (employee === null) {
        res.status(400).send('Employee does not exists!');
    } else {
        res.status(200).send('Employee deleted successfully!');
    }
}

module.exports = {
    getAllEmloyees,
    getEmployeeById,
    addNewEmployee,
    updateEmployeeBiId,
    deleteEmployeeById
}



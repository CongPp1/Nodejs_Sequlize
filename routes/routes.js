const { Router } = require('express');
const controller = require('../controllers/employeeController.js');
const router = Router();

router.get('/', controller.getAllEmloyees);
router.get('/:id', controller.getEmployeeById);
router.post('/add', controller.addNewEmployee);
router.put('/update/:id', controller.updateEmployeeBiId);
router.delete('/delete/:id', controller.deleteEmployeeById);

module.exports = router;


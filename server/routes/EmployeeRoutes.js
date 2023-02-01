import express from "express";
import EmployeeControllers from "../controllers/EmployeeController.js";

const router = express.Router();

router.post('/create', EmployeeControllers.createEmployee);
router.get('/all-details', EmployeeControllers.getAllEmployees);
router.get('/details/:id', EmployeeControllers.getEmployee);
router.put('/update/:id', EmployeeControllers.updateEmployee);
router.delete('/delete/:id', EmployeeControllers.deleteEmployee);

export default router;
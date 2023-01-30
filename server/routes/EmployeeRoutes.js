import express from "express";
import EmployeeControllers from "../controllers/EmployeeController.js";

const router = express.Router();

router.post('/create', EmployeeControllers.createEmployee);
router.get('/all-details', EmployeeControllers.getAllEmployees);
router.put('/update/:id', EmployeeControllers.updateEmployee);

export default router;
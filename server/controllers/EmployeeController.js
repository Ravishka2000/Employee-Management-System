import Employee from "../models/EmployeeModel.js";

const createEmployee = async (req, res) => {
    const newEmployee = new Employee(req.body);

    try{
        await newEmployee.save();
        res.status(200).json({
            message: "Employee Added Succesfully", 
            employee: newEmployee
        });
    }catch(err){
        res.status(500).json({
            message: err.message
        });
    };
};

const getAllEmployees = async (req, res) => {
    try {
        const employee = await Employee.find();
        res.status(200).json({
            employee
        });
    } catch (err) {
        res.status(404).json({
            message: err.message
        });
    };
};

const updateEmployee = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedEmployee = await Employee.findByIdAndUpdate(id, req.body);
        res.status(200).json({
            message: "Employee Updated Successfully",
            employee: updateEmployee
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    };
};

export default {
    createEmployee,
    getAllEmployees,
    updateEmployee
};
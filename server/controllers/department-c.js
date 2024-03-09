const Department = require('../models/department-m');

// Create a new department
const createDepartment = async (req, res) => {
    try {
        const { Department_id, Name, ContactNumber, Program } = req.body;

        // Checking if the department already exists
        const departmentExists = await Department.findOne({ Department_id });

        if (departmentExists) {
            return res.status(400).json({ message: "Department already exists" });
        }

        // Adding data for the department
        const newDepartment = await Department.create({
            Department_id,
            Name,
            ContactNumber,
            Program
        });

        res.status(201).json(newDepartment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get a department by ID
const getDepartmentById = async (req, res) => {
    try {
        const departmentId = req.params.department_id;

        // Fetch department by custom ID
        const department = await Department.findOne({ Department_id: departmentId });

        if (!department) {
            return res.status(404).json({ message: "Department not found" });
        }

        res.status(200).json(department);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Delete a department by ID
const deleteDepartmentById = async (req, res) => {
    try {
        const departmentId = req.params.department_id;

        // Delete department by custom ID
        const deletedDepartment = await Department.findOneAndDelete({ Department_id: departmentId });

        if (!deletedDepartment) {
            return res.status(404).json({ message: "Department not found" });
        }

        res.status(200).json(deletedDepartment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get all departments
const getDepartments = async (req, res) => {
    try {
        // Fetch all departments
        const allDepartments = await Department.find();

        res.status(200).json(allDepartments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { createDepartment, getDepartmentById, deleteDepartmentById, getDepartments };

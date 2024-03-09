const Staff = require('../models/staff-m'); // Importing Sequelize model

// Create staff
const creatstaff = async (req, res) => {
    try {
        console.log(req.body);
        const { staff_id, Department_id, Campus_id, Designation, Email, Name, Contact_number } = req.body;

        // Checking to see that staff emails are not recreated
        const staffExists = await Staff.findOne({ Email });

        if (staffExists) {
            return res.status(400).json({ mssg: "Email already exists" });
        }

        // Adding/create data for staff
        await Staff.create({
            staff_id,
            Department_id,
            Campus_id,
            Designation,
            Email,
            Name,
            Contact_number
        });

        res.status(201).json(req.body);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};




// Get staff by ID
const getstaffByid = async (req, res) => {
    try {
        const staffid = req.params.staff_id;

        // Fetch staff by custom ID
        const staff = await Staff.findOne({ staff_id: staffid });

        if (!staff) {
            return res.status(404).json({ message: "Staff not found" });
        }
// error check while fetching the data
        res.status(200).json(staff);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};




// funciton to get all staff members and an error message if nothing in the db
const getstaff = async (req, res) => {
    try {
        // Fetch all staff 
        const allstaff = await Staff.find();

        res.status(200).json(allstaff);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


// function to update a staff member  by id and error mesages included

const updatestaffById = async (req, res) => {
    try {
        const {staffid} = req.params.staff_id;
        const { Department_id, Campus_id, Name, Email,  Designation, Contact_number } = req.body;

        // Update staff by custom ID
        const updatedstaff = await Staff.findOneAndUpdate(
            { staff_id: staffid },
            { Department_id, Campus_id, Name, Email, Contact_number, Designation },
            { new: true } // Return the updated document
        );

        if (!updatedstaff) {
            return res.status(404).json({ message: "staff not found" });
        }

        res.status(200).json(updatedstaff);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};



// function to delete a user by id  and error aswell
const deletestaffById = async (req, res) => {
    try {
        const staffId = req.params.staff_id;

        // Delete staff by custom ID
        const deletedstaff = await Staff.findOneAndDelete({ staff_id: staffId });

        if (!deletedstaff) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.status(200).json(deletedstaff);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
module.exports = {
    creatstaff,
    getstaffByid,
    getstaff,
    updatestaffById,
    deletestaffById
};

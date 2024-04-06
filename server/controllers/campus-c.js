const Campus = require('../models/campus-m');

// Create a new campus
const createCampus = async (req, res) => {
    try {
        const { Campus_id, Campus_manager, Name, Location, Contact_number } = req.body;

        // Checking if the campus already exists
        const campusExists = await Campus.findOne({ Campus_manager });

        if (campusExists) {
            return res.status(400).json({ message: "Campus already exists" });
        }

        // Adding data for the campus
        const newCampus = await Campus.create({
            Campus_id,
            Campus_manager,
            Name,
            Location,
            Contact_number
        });

        res.status(201).json(newCampus);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get a campus by ID
const getCampusById = async (req, res) => {
    try {
        const campusId = req.params.campus_id;

        // Fetch campus by custom ID
        const campus = await Campus.findOne({ Campus_id: campusId });

        if (!campus) {
            return res.status(404).json({ message: "Campus not found" });
        }

        res.status(200).json(campus);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Delete a campus by ID
const deleteCampusById = async (req, res) => {
    try {
        const campusId = req.params.campus_id;

        // Delete campus by custom ID
        const deletedCampus = await Campus.findOneAndDelete({ Campus_id: campusId });

        if (!deletedCampus) {
            return res.status(404).json({ message: "Campus not found" });
        }

        res.status(200).json(deletedCampus);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get all campuses
const getCampuses = async (req, res) => {
    try {
        // Fetch all campuses
        const allCampuses = await Campus.find();

        res.status(200).json(allCampuses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { createCampus, getCampusById, deleteCampusById, getCampuses };

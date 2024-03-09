// floor controller
const Floor = require('../models/floor-m'); 

// Create floor
const createFloor = async (req, res) => {
    try {
        const { Floor_id, Department_id, Floor_number, Campus_id } = req.body;

        // Checking if the floor already exists
        const floorExists = await Floor.findOne({ Floor_id });

        if (floorExists) {
            return res.status(400).json({ message: "Floor already exists" });
        }

        // Adding data for floor
        const newFloor = await Floor.create({
            Floor_id,
            Department_id,
            Floor_number,
            Campus_id
        });

        res.status(201).json(newFloor);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get floor by ID
const getFloorById = async (req, res) => {
    try {
        const floorId = req.params.Floor_id;

        // Fetch floor by custom ID
        const floor = await Floor.findOne({ Floor_id: floorId });

        if (!floor) {
            return res.status(404).json({ message: "Floor not found" });
        }

        res.status(200).json(floor);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Delete floor by ID
const deleteFloorById = async (req, res) => {
    try {
        const floorId = req.params.Floor_id;

        // Delete floor by custom ID
        const deletedFloor = await Floor.findOneAndDelete({ Floor_id: floorId });

        if (!deletedFloor) {
            return res.status(404).json({ message: "Floor not found" });
        }

        res.status(200).json(deletedFloor);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get all floors
const getFloors = async (req, res) => {
    try {
        // Fetch all floors
        const allFloors = await Floor.find();

        res.status(200).json(allFloors);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    createFloor,
    getFloorById,
    deleteFloorById,
    getFloors
};

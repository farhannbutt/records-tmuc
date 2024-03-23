// Import the Room model
const Room = require('../models/room-m'); 

// Create room
const createRoom = async (req, res) => {
    try {
        const { Room_id, Name, Floor_id } = req.body;

        // Checking if the room already exists
        const roomExists = await Room.findOne({ Room_id });

        if (roomExists) {
            return res.status(400).json({ message: "Room already exists" });
        }

        // Adding data for room
        const newRoom = await Room.create({
            Room_id,
            Name,
            Floor_id
        });

        res.status(201).json(newRoom);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get room by ID
const getRoomById = async (req, res) => {
    try {
        const roomId = req.params.Room_id;

        // Fetch room by custom ID
        const room = await Room.findOne({ Room_id: roomId });

        if (!room) {
            return res.status(404).json({ message: "Room not found" });
        }

        res.status(200).json(room);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Delete room by ID
const deleteRoomById = async (req, res) => {
    try {
        const roomId = req.params.Room_id;

        // Delete room by custom ID
        const deletedRoom = await Room.findOneAndDelete({ Room_id: roomId });

        if (!deletedRoom) {
            return res.status(404).json({ message: "Room not found" });
        }

        res.status(200).json(deletedRoom);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get all rooms
const getRooms = async (req, res) => {
    try {
        // Fetch all rooms
        const allRooms = await Room.find();

        res.status(200).json(allRooms);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get rooms by Floor_id
const getRoomsByFloorId = async (req, res) => {
    try {
        const { Floor_id } = req.params;

        // Fetch rooms where Floor_id matches
        const rooms = await Room.find({ Floor_id });

        res.status(200).json(rooms);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


module.exports = {
    createRoom,
    getRoomById,
    deleteRoomById,
    getRooms,
    getRoomsByFloorId
};

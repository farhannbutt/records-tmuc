const Program = require('../models/program-m');

// Create Program
const createProgram = async (req, res) => {
    try {
        const { Program_id, Name, AwardingBody, Courses } = req.body;

        // Checking to see if the program ID already exists
        const programExists = await Program.findOne({ Program_id });

        if (programExists) {
            return res.status(400).json({ message: "Program ID already exists" });
        }

        // Adding data for program
        const newProgram = await Program.create({
            Program_id,
            Name,
            AwardingBody,
            Courses
        });

        res.status(201).json(newProgram);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get Program by ID
const getProgramById = async (req, res) => {
    try {
        const programId = req.params.program_id;

        // Fetch program by custom ID
        const program = await Program.findOne({ Program_id: programId });

        if (!program) {
            return res.status(404).json({ message: "Program not found" });
        }

        res.status(200).json(program);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


// Delete Program by ID
const deleteProgramById = async (req, res) => {
    try {
        const programId = req.params.program_id;

        // Delete program by custom ID
        const deletedProgram = await Program.findOneAndDelete({ Program_id: programId });

        if (!deletedProgram) {
            return res.status(404).json({ message: "Program not found" });
        }

        res.status(200).json(deletedProgram);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get all Programs
const getPrograms = async (req, res) => {
    try {
        // Fetch all programs
        const allPrograms = await Program.find();

        res.status(200).json(allPrograms);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    createProgram,
    getProgramById,
    deleteProgramById,
    getPrograms
};

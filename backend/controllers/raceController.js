const Race = require('../models/Race');

exports.createRace = async (req, res) => {
    try {
        const { title, description, route } = req.body;
        const newRace = new Race({ title, description, route, createdBy: req.user._id });
        await newRace.save();
        res.status(201).json({ message: 'Race created successfully', race: newRace });
    } catch (error) {
        console.error('Create race failed:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getAllRaces = async (req, res) => {
    try {
        const races = await Race.find();
        res.json(races);
    } catch (error) {
        console.error('Get all races failed:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Implement other race controller methods: getRaceById, updateRace, deleteRace

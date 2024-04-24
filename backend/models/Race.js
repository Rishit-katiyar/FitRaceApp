const mongoose = require('mongoose');

const raceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    route: { type: String, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    createdAt: { type: Date, default: Date.now },
    // Add more fields as needed
});

module.exports = mongoose.model('Race', raceSchema);

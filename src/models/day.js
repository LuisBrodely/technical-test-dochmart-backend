const mongoose = require('mongoose');

const availableHourSchema = new mongoose.Schema({
    time: { type: Number, required: true },
    capacity: { type: Number, default: 1 },
    reservations: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reservation'
    }]
});

const daySchema = new mongoose.Schema({
    date: { type: Date, required: true, unique: true },
    availableHours: [availableHourSchema]
});

const Day = mongoose.model('Day', daySchema);

module.exports = Day;

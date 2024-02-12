const Day = require('../models/day');

exports.getAllDays = async (req, res) => {
    try {
        const days = await Day.find().populate('availableHours.reservations');
        res.json(days);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getAvailableHoursByDayId = async (req, res) => {
    try {
        const { dayId } = req.params;

        const day = await Day.findById(dayId).populate('availableHours.reservations');
        if (!day) return res.status(404).json({ message: 'Día no encontrado' });

        res.json(day.availableHours);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
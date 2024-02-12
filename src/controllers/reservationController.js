const Reservation = require('../models/reservation');
const Day = require('../models/day');

exports.createReservation = async (req, res) => {
    try {
        const { dayId, hourId, name, email, phone } = req.body;

        const day = await Day.findById(dayId);
        if (!day) return res.status(404).json({ message: 'Día no encontrado' });

        const hour = day.availableHours.find(h => h._id == hourId);
        if (!hour) return res.status(404).json({ message: 'Hora no encontrada' });

        if (hour.reservations.length >= hour.capacity) {
            return res.status(400).json({ message: 'La hora seleccionada está llena' });
        }

        const reservation = new Reservation({
            name,
            email,
            phone
        });

        await reservation.save();

        hour.reservations.push(reservation);
        await day.save();

        res.status(201).json(reservation);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

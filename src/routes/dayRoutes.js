const express = require('express');
const router = express.Router();
const dayController = require('../controllers/dayController');

router.get('/', dayController.getAllDays);
router.get('/:dayId', dayController.getAvailableHoursByDayId);

module.exports = router;

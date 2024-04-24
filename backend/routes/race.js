const express = require('express');
const router = express.Router();
const raceController = require('../controllers/raceController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, raceController.createRace);
router.get('/', raceController.getAllRaces);
router.get('/:id', raceController.getRaceById);
router.put('/:id', authMiddleware, raceController.updateRace);
router.delete('/:id', authMiddleware, raceController.deleteRace);

module.exports = router;

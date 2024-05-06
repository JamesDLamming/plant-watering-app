const express = require('express');
const router = express.Router();
const { getPlants, addPlant, updateWaterDate, updatePlant, deletePlant } = require('../controllers/plantController');

router.get('/', getPlants);
router.post('/', addPlant);
router.put('/:id/water', updateWaterDate);
router.put('/:id/edit', updatePlant);
router.delete('/:id', deletePlant);

module.exports = router;

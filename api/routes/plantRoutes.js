const express = require('express');
const router = express.Router();
const { getPlants, addPlant, updateWaterDate, updatePlant, deletePlant } = require('../controllers/plantController');

router.get('/api/plants/get', getPlants);
router.post('/api/plants/add', addPlant);
router.put('/api/plants/:id/water', updateWaterDate);
router.put('/api/plants/:id/edit', updatePlant);
router.delete('/api/plants/:id/delete', deletePlant);

module.exports = router;

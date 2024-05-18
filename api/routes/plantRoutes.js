const express = require('express');
const router = express.Router();
const { getPlants, addPlant, updateWaterDate, updatePlant, deletePlant } = require('../controllers/plantController');
const upload = require('../middlewares/upload'); // Ensure this is the correct path

router.get('/api/plants', getPlants);
router.post('/api/plants', upload.single('photo'), addPlant); // Use upload middleware
router.put('/api/plants/:id/water', updateWaterDate);
router.put('/api/plants/:id/edit', upload.single('photo'), updatePlant); // Use upload middleware for edits if necessary
router.delete('/api/plants/:id', deletePlant);

module.exports = router;

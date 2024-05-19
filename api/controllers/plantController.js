const Plant = require('../models/Plant');

// Get all plants
async function getPlants(req, res) {
    try {
        const plants = await Plant.find();
        res.json(plants);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

// Add a new plant
async function addPlant(req, res) {
    try {
      const { name, location, lastWateredDate, wateringFrequency, wateringAmount, nextWaterDate } = req.body;
      console.log('Request Body:', req.body);
      console.log('File Info:', req.file);
  
      const photoUrl = req.file ? req.file.location : null; // S3 file URL
  
      const newPlant = new Plant({
        name,
        location,
        lastWateredDate,
        wateringFrequency,
        wateringAmount,
        nextWaterDate,
        photo: photoUrl // Save the S3 URL in the plant document
      });
  
      await newPlant.save();
      res.status(201).json(newPlant);
    } catch (err) {
      console.error('Error adding plant:', err);
      res.status(500).send('Server Error');
    }
  };

// Update water date
async function updateWaterDate(req, res) {
    try {
        const plant = await Plant.findById(req.params.id);
        plant.lastWateredDate = Date.now();
        plant.nextWaterDate = new Date(Date.now() + plant.wateringFrequency * 24 * 60 * 60 * 1000);
        await plant.save();
        res.json(plant);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};


// Edit Plant
async function updatePlant(req, res) {
    const { id } = req.params;

    try {
        // Find the document by ID and update it
        const plant = await Plant.findById(id);
        if (!plant) {
            return res.status(404).send('Plant not found');
        }

        const { name, location, wateringFrequency, lastWateredDate, nextWaterDate } = req.body;
        const photo = req.file ? req.file.location : plant.photo; // Use new photo if uploaded, otherwise keep the existing photo
    

        // Update fields
        plant.name = name || plant.name;
        plant.location = location || plant.location;
        plant.wateringFrequency = wateringFrequency || plant.wateringFrequency;
        plant.lastWateredDate = lastWateredDate || plant.lastWateredDate;
        plant.nextWaterDate = nextWaterDate || plant.nextWaterDate;
        plant.photo = photo

        await plant.save();  // Save the updated document

        res.status(201).json(plant);
    } catch (err) {
        console.error('Error updating plant:', err);
        res.status(500).send('Server error');
    }
};

//Delete plant
async function deletePlant(req, res) {
    try {
        const { id } = req.params;
        const deletedPlant = await Plant.findByIdAndDelete(id);

        if (!deletedPlant) {
            return res.status(404).send('Plant not found');
        }

        res.status(200).json({ message: 'Plant successfully deleted', deletedPlant });
    } catch (error) {
        console.error('Delete Plant Error:', error);
        res.status(500).send('Server error');
    }
};

module.exports = {getPlants, addPlant, updateWaterDate, updatePlant, deletePlant}
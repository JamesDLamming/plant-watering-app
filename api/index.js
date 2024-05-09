const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');


require('dotenv').config();

console.log(process.env.DB_URI); // Access your environment variable


// Middleware
app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(bodyParser.json());

const getPlants = require('./routes/plantRoutes')
const addPlant = require('./routes/plantRoutes')
const updateWaterDate = require('./routes/plantRoutes')
const updatePlant = require('./routes/plantRoutes')
const deletePlant = require('./routes/plantRoutes')
app.use(getPlants);
app.use(addPlant)
app.use(updateWaterDate)
app.use(updatePlant)
app.use(deletePlant)


// Port configuration
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const connectDB = require('../config/db');
// Connect to Database
connectDB();

module.exports = app;
const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

console.log(process.env.DB_URI); // Access your environment variable


// Middleware
app.use(cors());
app.use(express.json()); // for parsing application/json
app.use('/', require('./routes/plantRoutes'));


// Port configuration
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const connectDB = require('../config/db');
// Connect to Database
connectDB();

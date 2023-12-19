// Import necessary modules
const express = require("express");
const mongoose = require("mongoose");
const notesRoutes = require('./src/routes/noteRoutes');
const cors = require("cors");
require('dotenv').config(); // Load environment variables from .env file

// Set up the Express app
const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/notes', notesRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);

// Event listeners for MongoDB connection
mongoose.connection.on('connected', () => {
  console.log("Connected to the database");
});

mongoose.connection.on('error', (error) => {
  console.error("Error connecting to the database:", error.message);
});

// Close MongoDB connection on app termination
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('MongoDB connection closed due to app termination');
    process.exit(0);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

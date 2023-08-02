const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017'; // Replace this with your actual MongoDB connection URL

mongoose.connect('mongodb://127.0.0.1/db')
  .then(() => {
    console.log('Connected to Database :: MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

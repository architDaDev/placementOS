const mongoose = require('mongoose');
require('dotenv').config();

console.log('Connecting to MongoDB Atlas...');

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Successfully connected to MongoDB Atlas!');
    console.log('Database Name:', mongoose.connection.name);
    process.exit(0);
  })
  .catch((err) => {
    console.error('❌ Connection error:', err.message);
    process.exit(1);
  });
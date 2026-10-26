const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['student', 'placement_coordinator'], required: true },
  name: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
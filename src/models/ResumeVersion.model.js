const mongoose = require('mongoose');

const resumeVersionSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  label: { type: String, required: true }, // e.g., "Backend Focused v2"
  fileUrl: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('ResumeVersion', resumeVersionSchema);
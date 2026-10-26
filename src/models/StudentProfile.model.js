const mongoose = require('mongoose');

const studentProfileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  collegeId: { type: String, required: true, unique: true },
  course: { type: String, required: true },
  graduationYear: { type: Number, required: true },
  gradingScale: { type: String, required: true }, // e.g., "10" for CGPA or "100" for percentage
  gradeValue: { type: Number, required: true },
  activeBacklogs: { type: Number, required: true, default: 0 },
  skills: [String],
  projects: [{
    title: String,
    description: String,
    repoUrl: String,
    deployUrl: String
  }],
  experience: [{
    company: String,
    role: String,
    duration: String
  }]
}, { timestamps: true });

module.exports = mongoose.model('StudentProfile', studentProfileSchema);
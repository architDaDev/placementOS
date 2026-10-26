const mongoose = require('mongoose');

const driveSchema = new mongoose.Schema({
  coordinator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  company: { type: String, required: true },
  role: { type: String, required: true },
  type: { type: String, enum: ['job', 'internship'], required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  deadline: { type: Date, required: true },
  status: { type: String, enum: ['draft', 'published', 'closed', 'archived'], default: 'draft' },
  eligibilityRules: {
    allowedCourses: [String],
    allowedGraduationYears: [Number],
    minGradeValue: { type: Number, required: true },
    maxBacklogs: { type: Number, required: true }
  },
  requiredSkills: [String],
  preferredSkills: [String],
  rounds: [{ name: String, description: String }],
  compensation: {
    type: { type: String, enum: ['stipend', 'salary', 'unspecified'] },
    amount: String
  }
}, { timestamps: true });

module.exports = mongoose.model('Drive', driveSchema);
const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  drive: { type: mongoose.Schema.Types.ObjectId, ref: 'Drive', required: true },
  resumeVersion: { type: mongoose.Schema.Types.ObjectId, ref: 'ResumeVersion', required: true },
  academicSnapshot: {
    course: String,
    graduationYear: Number,
    gradingScale: String,
    gradeValue: Number,
    activeBacklogs: Number
  },
  overallStage: { 
    type: String, 
    enum: ['Applied', 'Shortlisted', 'Assessment', 'Interview', 'Offer', 'Rejected', 'Withdrawn'], 
    default: 'Applied' 
  },
  roundHistory: [{
    roundName: String,
    status: { type: String, enum: ['pending', 'passed', 'failed', 'cancelled'] },
    date: Date,
    notes: String
  }],
  offerStatus: { type: String, enum: ['None', 'Accepted', 'Declined'], default: 'None' },
  privateReflection: { type: String }
}, { timestamps: true });

// Prevent duplicate applications for the same drive by the same student
applicationSchema.index({ student: 1, drive: 1 }, { unique: true });

module.exports = mongoose.model('Application', applicationSchema);
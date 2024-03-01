const mongoose = require('mongoose');

const leaveTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  totalDays: {
    type: Number,
    required: true,
    min: 0
  },
  casualleave: {
    type: Number,
    required: true,
  },
  sickleave: {
    type: Number,
    required: true,
  },
  earnedleave: {
    type: Number,
    required: true,
  },
  maternityleave: {
    type: Number,
    required: true,
  },
  paternityleave: {
    type: Number,
    required: true,
  }
});

const LeaveType = mongoose.model('LeaveType', leaveTypeSchema);

module.exports = LeaveType;

import mongoose from "mongoose";
import { SUCHI_MEMBER_STATUS, SUCHI_TYPES } from "../../helpers/constants/constants.mjs";

const samparkSutraSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: [true, "Please enter mobile number."],
    match: /^([+]\d{2})?\d{10}$/,
    trim: true
  }
})

const suchiMemberSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  mobileNumber: {
    type: String,
    required: [true, "Please enter mobile number."],
    match: /^([+]\d{2})?\d{10}$/,
    unique: true,
    trim: true
  },
  whatsappMobileNumber: {
    type: Number,
    match: /^([+]\d{2})?\d{10}$/,
    trim: true
  },
  shreni: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'Shreni'
  },
  suchiType: {
    type: String,
    enum: SUCHI_TYPES,
    required: true
  },
  samparkSutra: [samparkSutraSchema],
  currentStatus: {
    type: String,
    enum: SUCHI_MEMBER_STATUS,
    default: 'ACTIVE'
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
});

export default suchiMemberSchema;
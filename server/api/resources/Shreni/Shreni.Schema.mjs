import mongoose from "mongoose";

const shreniSchema = new mongoose.Schema({
  code: {
    type: String,
    unique: true,
    trim: true,
    uppercase: true,
    required: true
  },
  name: {
    type: String,
    trim: true
  },
  isActive: {
    type: Boolean,
    default: true
  }
})

export default shreniSchema;
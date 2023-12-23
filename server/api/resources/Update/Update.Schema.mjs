import mongoose from "mongoose"

const updateSchema = new mongoose.Schema({
  updateMessage: {
    type: String,
    required: [true, "Please enter update"],
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Please provide user id."]
  },
  createdFor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SuchiMember",
    required: [true, "Please provide suchi member id."]
  },
  nextContactOn: {
    type: Date,
    default: ""
  }
}, {
  timestamps: true
})

export default updateSchema;
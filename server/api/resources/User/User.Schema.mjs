import mongoose from "mongoose";
import bcrypt from "bcrypt";
const saltRounds = 10;
import jwt from "jsonwebtoken";
import crypto from 'crypto';
import { DEFAULT_PASSWORD } from "../../helpers/constants/constants.mjs"


const userSchema = new mongoose.Schema({
  name: {
      type: String,
      required: [true, "Please enter name."],
      trim: true
  },
  mobileNumber: {
    type: String,
    required: [true, "Please enter mobile number."],
    match: /^([+]\d{2})?\d{10}$/,
    unique: true,
    trim: true
  },
  diyut: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Diyut'
  },
  shreni: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Shreni'
  },
  isActive: {
    type: Boolean,
    default: true
  },
  password: {
      type: String,
      required: [true, "Please enter password"],
      minLength: [4, "Password should be greater than 4 characters."],
      default: DEFAULT_PASSWORD.toString()
  },
  role:{
      type: String,
      enum: ["admin", "user"],
      default: "user"
  }
  // suchiMembersAllocated: [{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'SuchiMember'
  // }]
}, {
  timestamps: true
})

userSchema.pre("save", async function(next) {
  if(!this.isModified("password")) {
      next();
  }
  this.password = this.password.toString();
  this.password = await bcrypt.hash(this.password, saltRounds);
});


userSchema.method.isMobileNumberTaken = async function(mobileNumber, excludeUserId) {
  const user = await this.findOne({ mobileNumber, _id: { $ne: excludeUserId } });
  return !!user;
};

userSchema.methods.isPasswordMatch = async function (password) {
  password = password.toString();
  return await bcrypt.compare(password, this.password);
};

export default userSchema;
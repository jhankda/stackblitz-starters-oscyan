import mongoose from "mongoose"

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  salary:{
    type: [Number,"in INR"],
    required: true
  },
  qualification: {
    type: String,
    required: true
  },
  experience: {
    type: Number,
    default: 0,
    required: true
  },
  worksinHosptal:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hospital'

  },
],

},{timestamps: truue});


export const Doctor = mongoose.model("Doctor", doctorSchema);
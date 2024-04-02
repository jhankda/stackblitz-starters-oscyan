import mongoose from "mongoose"

const hosptalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  addressLine1: {
    type: String,
    required: true
  },
  addressLine2: {
    type: String
  },
  pincode: {
    type: String,
    required: true
  },
  specializedIN: [{
    type: String
  }]
  
},{timestamps: truue});


export const Hospital = mongoose.model("Hospital", hospitalSchema);
import mongoose from "mongoose"

const patientSchema = new mongoose.Schema({
  name: {
    type:  String,
    Required: true
  },
  diagnosedWith: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  Age: {
    type: Number,
    required: true
  },
  BloodGroup: {
    type: String,
    required: true
  },
  Gender: {
    type: String,
    enum: ["M","F","O"],
    required: true
  },
  admittedIn: {
    type: moongoose.Schema.Types.ObjectId,
    ref: "Hospital"
  }
},{timestamps: truue});


export const Patient = mongoose.model("Patient", hospitalSchema);
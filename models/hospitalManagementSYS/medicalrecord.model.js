import mongoose from "mongoose"

const MrecordSchema = new mongoose.Schema({},{timestamps: truue});


export const Mrecord = mongoose.model("Mrecord", MrecordSchema);
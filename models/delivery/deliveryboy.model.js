import mongoose from 'mongoose'

const deliveryBoySchema = new mongoose.Schema({
  name:{
    type:String,
    requried:true,
    uppercase:true
  },
  email:{
    type:string,
    required:true,
    unique:true,
  },
  phone:{
    type:Number,
    required:true
  },
  Ratings:{
    type:Number,
    required:true,
    default:0
  },
  emplyeeId:{
    type:Number,
    required:true
  }




}{timestamps:true});

export const deliveryboy  = mongoose.model("deliveryboy",deliveryBoySchema);
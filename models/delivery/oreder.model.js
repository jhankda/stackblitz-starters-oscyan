import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
  orderId:{
    type:Number,
    required:true
  },
  quantity:{
    type:Number,
    required:true
  }
})
import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  decripion: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  productImage: {
    type: String,

  },
  price: {
    type: [Number,"price in INR"],
    default: 0,

  },
  Stock: {
    default: 0,
    type: Number
  },
  Catrgory: {
    type : mongoose.Schema.Types.ObjectId,
    ref:"Category",
    required: true
  },
  Owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"User"
  }
},{timestamps: true});

export const Product = mongoose.model("Product", productSchema);
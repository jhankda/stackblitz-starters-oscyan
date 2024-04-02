import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name:{
    type:String,
    required: true,
    lowercase:  true
  },
  Userid:{
    type:String,
    required: true,
    unique: true
  },
  email:{
    type: String,
    requred: true,
    inique:true
  },
  



},{timestamps:true});

export const User = mongoose.model("User",UserSchema);
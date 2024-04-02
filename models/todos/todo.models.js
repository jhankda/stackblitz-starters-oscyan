import mongoose from 'mongoose'

cons todoSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    
  },
  complete: {
    type: Boolean,
    default: false,

  },
  createdBy: {
    type: mongoose.Schema.types.ObjectId,
    ref: "User"

  },
  subTodo: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "subTODO"
    }
  ]//Array of sub todos
},{timestamps: true});

export const Todo = mongoose.model("Todo", todoSchema);
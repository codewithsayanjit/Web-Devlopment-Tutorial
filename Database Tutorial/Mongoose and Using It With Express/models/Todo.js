// Import mongoose package for MongoDB operations
import mongoose from "mongoose";

// Create a schema (structure) for Todo documents
const TodoSchema = new mongoose.Schema({

    // Title field:  Must be a String , Required field (cannot be empty), Default value is "Hello" if no title is provided
    title: {
        type: String,
        required: true,
        default: "Hello"
    },

    // Description field: Stores additional information about the todo
    desc: String,
    // Boolean field to track whether the task is completed
    isDone: Boolean,
    // Number field to store days or duration
    days: Number
});

// Create a model named "Todo"
// MongoDB collection name will be "todos" (pluralized automatically)
export const Todo = mongoose.model('Todo', TodoSchema);
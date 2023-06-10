import mongoose from "mongoose";

// create todo Schema
const todoSchema = mongoose.Schema(
    {
        name:{
            type: String,
            requried: true,
            trim: true
        },
        piority: {
            type: String,
            requried: true,
            trim: true
        },
        status:{
            type: Boolean,
            default: true
        },
        trash:{
            type: Boolean,
            default: false
        }
    },
    {
        timestamps:true
    }
)

// export
export default mongoose.model("Todos", todoSchema )
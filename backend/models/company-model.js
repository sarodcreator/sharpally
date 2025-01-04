import { timeStamp } from "console";
import mongoose from "mongoose";
import { type } from "os";

//companySchema
const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    },
    location: {
        type: String,
    },
    logo: {
        type: String,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    jobType: {
        type: String,
        required: true
    }
}, { timeStamp:true })

export const Company = mongoose.model("company", companySchema);
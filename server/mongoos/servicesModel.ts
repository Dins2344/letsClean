import { Schema, model } from "mongoose";

const workSchema = new Schema(
    {
        name: { type: String },
        price:{type:String}
    }
)

const ServiceModel = new Schema({
    name: { type: String },
    works: [
        {workSchema}
    ]
} 
)


export const Services = model('Services',ServiceModel)
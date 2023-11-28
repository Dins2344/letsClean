import { Schema, model } from "mongoose";

const ordersSchema = new Schema({
  name: { type: String },
  price: { type: String },
});



export const Orders = model("Orders", ordersSchema);

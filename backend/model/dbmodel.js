import mongoose from "mongoose";

const itemsSchema = new mongoose.Schema({
    product_name: {
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    rating:{
        type:Number,
        required:true,
    },
    ASIN:{
        type:String,
        required:true
    },  
    },
    {
        timestamps:true
    })

const itemsModel = mongoose.model('products', itemsSchema)
export default itemsModel;
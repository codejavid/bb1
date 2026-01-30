import mongoose from "mongoose";
import products from "./data.js";
import Product from "../models/product.js";
import dotenv from "dotenv";

dotenv.config({
    path:"backend/config/config.env"
});

const seedProducts = async() => {

    try{
        await mongoose.connect(process.env.MONGODB_URI);

        // Delete existing product
    
        await Product.deleteMany();
    
        // Insert new product
        await Product.insertMany(products);

        process.exit();

    }catch(error){
        console.log(error);
        process.exit();
    }


}

seedProducts();
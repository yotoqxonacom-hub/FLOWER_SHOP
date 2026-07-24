console.log("<<<<  server is running  >>>>")

import dotenv from "dotenv";
dotenv.config();

import dns from 'dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);

import mongoose from "mongoose";

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL as string, {}).then((data) => {
    console.log("MongoDB connection succeed");
    const PORT = process.env.PORT ?? 3030;

}).catch((err => console.log("Error on connection mongodb:", err)));
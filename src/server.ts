
import dotenv from "dotenv";
dotenv.config();
import dns from 'dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);
import mongoose from "mongoose";
import app from "./app";

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL as string, {}).then((data) => {
    const PORT = process.env.PORT ?? 3030;
    app.listen(PORT, function () {
        console.log(`The server is running succesfully on port ${PORT}`);
    })

}).catch((err => console.log("Error on connection mongodb:", err)));
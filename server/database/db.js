import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async() => {
    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-k0owqvi-shard-00-00.xbphr5w.mongodb.net:27017,ac-k0owqvi-shard-00-01.xbphr5w.mongodb.net:27017,ac-k0owqvi-shard-00-02.xbphr5w.mongodb.net:27017/?ssl=true&replicaSet=atlas-rbd1py-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, { useUnifiedTopology: true });
        console.log('Database connected sucessfully');
    } catch (error) {
        console.log('Error while connecting with database', error.message);
    }
} 

export default Connection;
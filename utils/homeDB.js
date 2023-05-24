import mongoose from "mongoose";

let isConnected = false //track the connection

const HomeDB = async() => {
    mongoose.set('strictQuery', true)

    if (isConnected) {
        console.log('MongoDB is already connected');
        return;
    }
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "smds_homes",            
        });
        isConnected = true
        console.log('MongoDB connected');
    } catch(error){
        console.log(error);
    }
    
    return 
}

export default HomeDB
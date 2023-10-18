import mongoose from "mongoose";
import config from "config"

let dbconnect = async () => {
    try {
        await mongoose.connect(config.get("DB_URI"));
        console.log("DB is connected Successfully");

    } catch (error) {
        console.log(error);
    }
}

 export default dbconnect()
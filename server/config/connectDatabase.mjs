import mongoose from "mongoose";

export async function connectDatabase() {
    mongoose.set('strictQuery', false);
    try {
        const db = await mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log(`Mongodb connected with server: ${db.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to the database. \n${error}`);
    }
    
    // .then(db => {
    //     console.log(`Mongodb connected with server: ${db.connection.host}`);
    // })
    // .catch(err => {
        
    // });
};

const mongoose = require('mongoose');
require('dotenv').config()


const URI = process.env.URI;
try {
    mongoose.set('strictQuery', false);
    const connectDB = async () => {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected...');
    };

    connectDB();

} catch (e) {
    console.log("Database not connect")
}





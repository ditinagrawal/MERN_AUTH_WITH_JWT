const mongoose = require('mongoose')

const dbURI = "mongodb://ditinagrawal:ditin2005@ac-fvjnrx6-shard-00-00.rqcvmjf.mongodb.net:27017,ac-fvjnrx6-shard-00-01.rqcvmjf.mongodb.net:27017,ac-fvjnrx6-shard-00-02.rqcvmjf.mongodb.net:27017/userDB?ssl=true&replicaSet=atlas-vb3oj5-shard-0&authSource=admin&retryWrites=true&w=majority"

const connectDB = async () => {
    try {
        await mongoose.connect(dbURI)
        console.log("Connected to Database");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB
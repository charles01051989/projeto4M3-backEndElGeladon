const mongoose = require('mongoose');

const connectToDataBase = () => {
  mongoose.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log("MongoDb Connected!")).catch((error) => console.log(`Connection error with MongoDb, error: ${error}`))
};

module.exports = connectToDataBase;

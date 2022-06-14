const mongoose = require('mongoose');

const connectToDataBase = () => {
  mongoose.connect('mongodb://localhost:27017/paletas-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log("MongoDb Connected!")).catch((error) => console.log(`Connection error with MongoDb, error: ${error}`))
};

module.exports = connectToDataBase;

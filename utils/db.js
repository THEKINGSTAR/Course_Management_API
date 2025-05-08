// utils/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;

  return mongoose.connect(process.env.MONGO_URI, {
    dbName: 'courseDB',
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};

module.exports = connectDB;

const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(
    "mongodb+srv://matinVilan:mtnVLN13241324@cluster0.hqb6r74.mongodb.net/devcamper?retryWrites=true&w=majority"
  );

  console.log(`mongoDB connected: ${conn.connection.host}`.cyan.underline.bold);
};
module.exports = connectDB;

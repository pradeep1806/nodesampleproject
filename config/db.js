const mongoose = require("mongoose");

// @desc Connects to Mongo DB with below specified flags.
const connectDb = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
  console.log(`Mongo Db connect ${conn.connection.host}`);
};
module.exports = connectDb;

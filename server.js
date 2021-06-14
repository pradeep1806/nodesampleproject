const express = require("express");
const dotenv = require("dotenv");
const logger = require("./middlewares/logger");
const morgan = require("morgan");
const connectDb = require("./config/db");
const colors = require("colors");
//Import routes
const breeds = require("./routes/breeds");
//Load environmental configurations
dotenv.config({ path: "./config/config.env" });

//Connect to db ;
connectDb();

//Configure Ports and services
const app = express();

//Body Parser
app.use(express.json());

//Configure Middlewares
if (process.env.NODE_ENV == "development") {
  //Based on use case we can use the middlewares
  app.use(morgan("dev")); //Using other middlewares directly to log
  app.use(logger); //Using our own logger to log request.
}

const PORT = process.env.PORT || 7000;
//Link routes
app.use("/api/v1/breeds", breeds);

//Start Server to listen
const server = app.listen(
  PORT,
  console.log(
    `Server started in ${process.env.NODE_ENV} mode on port ${PORT}`.green.bold
  )
);

//Handle unhandled promise rejections.
process.on("unhandledRejection", (err, promise) => {
  console.log(`Server error ${err.message}`.red.bold);
  //Close Server & Exit process
  server.close(() => process.exit(1));
});

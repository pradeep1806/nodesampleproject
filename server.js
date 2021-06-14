const express = require('express');
const dotenv = require('dotenv');

//Load environmental configurations
dotenv.config({path: './config/config.env'});

//Configure Ports and services
const app = express();
const PORT = process.env.PORT || 7000;

//Start Server to listen
const server = app.listen(
  PORT,
  console.log(
    `Server started in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);

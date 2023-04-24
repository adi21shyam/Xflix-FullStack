const express = require("express");
const cors = require("cors");
const httpStatus = require("http-status");
const routes = require("./routes");
const helmet = require("helmet");

const app = express();

// set security HTTP headers - https://helmetjs.github.io/
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// gzip compression


// enable cors
app.use(cors());
app.options("*", cors());



// Reroute all API request starting with "/v1" route
app.use("/v1", routes);



module.exports = app;
require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");
const express = require("express");
app.use(express.json());
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
const node_env=process.env.NODE_ENV;

const mongo_url = process.env.MONGO_URI;
console.log(mongo_url); 


mongoose.connect(`${mongo_url}`, options).then(()=>{
    console.log('Connected to Database at', mongo_url);
}).catch(()=>{
    console.log('Failed to connect');
})

app.listen(`${node_env}`, ()=>{
    console.log('Listening on port', `${node_env}`);
})

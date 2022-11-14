// const express = require("express");
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
const app = express();
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection Successuly!"))
  .catch((e) => console.log(e));

app.listen(8800, () => {
  console.log("backend server is running!");
});

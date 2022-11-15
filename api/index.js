// const express = require("express");
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auth";
const app = express();
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB connection Successuly!"))
  .catch((e) => console.log(e));

app.use(express.json());

app.use("/api/auth", authRoute); //with this route adding in authroute afterwards

app.listen(8800, () => {
  console.log("backend server is running!");
});

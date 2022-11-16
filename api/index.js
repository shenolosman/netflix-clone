// // const express = require("express");
const express =require('express');
const mongoose =require("mongoose");
const dotenv =require("dotenv");
const routerAuth =require("./routes/auth");
const app = express();
const port=8800;
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => console.log("DB connection Successfully!"))
  .catch((e) => console.log(e));

app.use(express.json());

app.use("/api/auth", routerAuth); //with this route adding in authroute afterwards

app.listen(port, () => {
  console.log("backend server is running!");
});

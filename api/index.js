const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routerAuth = require("./routes/auth");
const routerUser=require("./routes/users")
// const cors = require("cors");
const app = express();
dotenv.config();
// console.log("roeters",routerAuth)
mongoose
  .connect(process.env.MONGO_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => console.log("DB connection Successfully!"))
  .catch((e) => console.log(e));
// app.use(cors());


app.use(express.json());
app.get("/", (req,res) => {
  res.json({ message: `API Working! Auth Routes: '/api/auth/register' , '/api/auth/login'` });
});
app.use("/api/auth", routerAuth); 
app.use("/api/users", routerUser); 

app.listen(8800, () => {
  console.log("backend server is running!");
});

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routerAuth = require("./routes/auth");
const routerUser = require("./routes/users");
const routerMovie = require("./routes/movies");
const routerList = require("./routes/lists");
const cors = require("cors");
const app = express();
dotenv.config();
// var corsOptionsDelegate = {
//   origin: "*",
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   preflightContinue: false,
//   optionsSuccessStatus: 204,
// };
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
mongoose
  .connect(process.env.MONGO_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => console.log("DB connection Successfully!"))
  .catch((e) => console.log(e));

app.use(express.json());
app.use(cors());
// app.use(cors(corsOptionsDelegate));
app.get("/", (req, res) => {
  res.json({ message: `API Working! Auth Routes: '/api/auth/register' , '/api/auth/login'` });
});
app.use("/api/auth", routerAuth);
app.use("/api/users", routerUser);
app.use("/api/movies", routerMovie);
app.use("/api/lists", routerList);

app.listen(8800, () => {
  console.log("backend server is running!");
});

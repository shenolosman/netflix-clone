const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

//Register
//http://localhost:8800/api/auth/register in body username,mail,pass
router.post(
  "/register",
  // [
  //   check("username", "Please Enter a Valid Username").not().isEmpty(),
  //   check("email", "Please enter a valid email").isEmail(),
  //   check("password", "Please enter a valid password").isLength({
  //     min: 6,
  //   }),
  // ],
  // async (req, res) => {
  //   const errors = validationResult(req);
  //   if (!errors.isEmpty()) {
  //     return res.status(400).json({
  //       errors: errors.array(),
  //     });
  //   }

  //   const { username, email, password } = req.body;
  //   try {
  //     let user = await User.findOne({
  //       email,
  //     });
  //     if (user) {
  //       return res.status(400).json({
  //         msg: "User Already Exists",
  //       });
  //     }

  //     user = new User({
  //       username,
  //       email,
  //       password,
  //     });

  //     // const salt = await bcrypt.genSalt(10);
  //     // user.password = await bcrypt.hash(password, salt);
  //     user.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString();

  //     await user.save();

  //     const payload = {
  //       user: {
  //         id: user.id,
  //       },
  //     };

  //     jwt.sign(
  //       payload,
  //       process.env.SECRET_KEY,
  //       {
  //         expiresIn: 10000,
  //       },
  //       (err, token) => {
  //         if (err) throw err;
  //         res.status(200).json({
  //           token,
  //         });
  //       }
  //     );
  //   } catch (err) {
  //     console.log(err.message);
  //     res.status(500).send("Error in Saving");
  //   }
  // }

  async (req, res) => {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
    });
    try {
      const user = await newUser.save();
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }
);

//Login
//http://localhost:8800/api/auth/login in body raw/json mail and pass
router.post(
  "/login",
  // [
  //   check("email", "Please enter a valid email").isEmail(),
  //   check("password", "Please enter a valid password").isLength({
  //     min: 6,
  //   }),
  // ],
  // async (req, res) => {
  //   const errors = validationResult(req);

  //   if (!errors.isEmpty()) {
  //     return res.status(400).json({
  //       errors: errors.array(),
  //     });
  //   }
  //   const { email, password } = req.body;
  //   try {
  //     let user = await User.findOne({
  //       email,
  //     });
  //     if (!user)
  //       return res.status(400).json({
  //         message: "User Not Exist",
  //       });
  //     // const isMatch = await bcrypt.compare(password, user.password);
  //     // if (!isMatch)
  //     //   return res.status(400).json({
  //     //     message: "Incorrect Password !",
  //     //   });
  //     const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
  //     const originalPass = bytes.toString(CryptoJS.enc.Utf8);
  //     originalPass !== req.body.password && res.status(401).json("Wrong pass or username!");

  //     const payload = {
  //       user: {
  //         id: user.id,
  //       },
  //     };

  //     jwt.sign(payload, "randomString", { expiresIn: 3600 }, (err, token) => {
  //       if (err) throw err;
  //       res.status(200).json({
  //         token,
  //       });
  //     });
  //   } catch (e) {
  //     console.error(e);
  //     res.status(500).json({
  //       message: "Server Error",
  //     });
  //   }
  // }

  async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(401).json("Wrong pass or username!");
        const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        const originalPass = bytes.toString(CryptoJS.enc.Utf8);
        originalPass !== req.body.password && res.status(401).json("Wrong pass or username!");
        const accessToken = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.SECRET_KEY, { expiresIn: "5d" });
        const { password, ...info } = user._doc;
        // res.status(200).json(info);
        res.status(200).json({ ...info, accessToken });
      } catch (err) {
        res.status(500).json(err);
      }
    }
);

module.exports = router;

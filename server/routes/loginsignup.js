const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const user = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtsecret = "MynameisShreenidhi1$#";

router.post(
  "/createuser",
  [
    body("email").isEmail(),
    body("name").isLength({ min: 5 }),
    body("role").isLength({min:4}),
    body("password", "Incorrect Password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const salt = await bcrypt.genSalt(10);
    const secPassword = await bcrypt.hash(req.body.password,salt);
    try {
      await user.create({
        role: req.body.role,
        name: req.body.name,
        password: secPassword,
        email: req.body.email,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);
router.post(
  "/loginuser",
  [
    body("email").isEmail(),
    body("password", "Incorrect Password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email } = req.body;
    try {
      let userData = await user.findOne({ email });
      if (!userData) {
        return res
          .status(404)
          .json({ errors: "Try logging with correct credentials" });
      }

      const pwdCompare = await bcrypt.compare(
        req.body.password,
        userData.password
      );

      if (!pwdCompare) {
        return res
          .status(404)
          .json({ errors: "Try logging with correct credentials" });
      }

      // If login is successful, determine the user's role and send the appropriate response.
      if (userData.role === "user") {
        const data = {
          user: {
            id: userData.id,
          },
        };
        const authToken = jwt.sign(data, jwtsecret);
        return res.json({ success: true, authToken: authToken, role: "user" });
      } else if (userData.role === "owner") {
        const data = {
          user: {
            id: userData.id,
          },
        };
        const authToken = jwt.sign(data, jwtsecret);
        return res.json({ success: true, authToken: authToken, role: "owner" });
      } else {
        return res.status(404).json({ errors: "Invalid role" });
      }
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

module.exports = router;

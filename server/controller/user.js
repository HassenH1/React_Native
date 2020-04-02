const express = require("express")
const router = express.Router()
const { check, validationResult } = require('express-validator');


const User = require("../model/User.js")

router.post("/signup", [
  // username must be an email
  check('email').isEmail(),
  check('username').isLength({ min: 3 }),
  // password must be at least 5 chars long
  check('password').isLength({ min: 5 })
], (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  console.log("the end of the post method?")

  // try {
  //   const createUser = await User.create(req.body)

  //   res.json(createUser)

  // } catch (err) {

  //   console.log(err)

  // }
})

router.post("/signin", async (req, res) => {
  try {
    const get = await User.findOne({ "email": req.body.email, "password": req.body.password })

    if (get === null) {

      res.status(400).send({

        message: 'This is an error!'

      });

      return

    } else {

      res.json(get)

    }

  } catch (err) {

    console.log(err)

  }
})

module.exports = router
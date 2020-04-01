const express = require("express")
const router = express.Router()

const User = require("../model/User.js")

router.post("/signup", async (req, res) => {
  console.log(req.body, "<--------body")
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
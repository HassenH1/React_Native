const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const methodOverride = require('method-override')
const cors = require('cors')
const userController = require('./controller/user')
require('./db/db.js')

///middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(methodOverride('_method'))
app.use(cors())
///

///controler
app.use('/', userController)
///

app.listen(5000, () => {
  console.log("listening on port 5000")
})
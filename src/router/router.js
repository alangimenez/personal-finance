const express = require('express')
const router = express.Router()

const login = require('./sections/login')

router.use(login)

module.exports = router
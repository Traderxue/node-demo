const express = require('express')
const artcateHandler = require('../router_handler/artcate.js')
const router = express.Router()

router.get('/cates',artcateHandler.getCates)

module.exports = router
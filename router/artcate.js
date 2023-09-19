const express = require('express')
const artcateHandler = require('../router_handler/artcate.js')
const router = express.Router()

router.get('/cates',artcateHandler.getCates)

router.post('/addcates',artcateHandler.addCates)

router.get('/deletecate/:id',artcateHandler.deleteCateById)

router.get('/cates/:id',artcateHandler.getCateById)

router.post('/updatecate/:id',artcateHandler.updateById)

module.exports = router
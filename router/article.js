const express = require('express')

const articleHandler = require("../router_handler/article.js")

const router = express.Router()

router.get('/article',articleHandler.getArticle)

router.post('/article',articleHandler.addArticle)

router.get('/article/:id',articleHandler.deleteById)

module.exports = router
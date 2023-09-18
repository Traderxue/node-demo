const express = require('express')

//导入路由对应的处理函数
const userHandler = require("../router_handler/user.js")

const router = express.Router()


//注册
router.post('/register',userHandler.regUser)

//登录
router.post('/login',userHandler.login)

module.exports = router
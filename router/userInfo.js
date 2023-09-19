const express = require('express')
const userInfo_handler = require('../router_handler/userinfo.js')

const router = express.Router()

router.get('/userinfo',userInfo_handler.getUserInfo)

router.post('/userinfo',userInfo_handler.updateUserInfo)

router.post('/updatepwd',userInfo_handler.updatepwd)

router.post('/update/avatar',userInfo_handler.updateAvatar)


module.exports = router
const express = require('express')
const cors = require('cors')
const expressJWT = require("express-jwt");

const app = express()


//处理跨域请求
app.use(cors())

//解析数据
app.use(express.json())      
// app.use(express.urlencoded({extends:false}))


//解析token
app.use(expressJWT({secret:'123456'}).unless({path:[/^\/api\//]}))


//路由模块
const userRouter = require("./router/user.js")
app.use('/api',userRouter)
const userInfo = require("./router/userInfo.js")
app.use('/my',userInfo)
const artcate = require("./router/artcate.js")
app.use('/my',artcate)

//错误级别中间级
app.use((err,req,res,next)=>{
    if (err) {
        console.error(err.message);
        res.status(err.status || 500).json({ error: err.message });
    }
})

app.listen(3000,()=>{
    console.log("serve is running at http://127.0.0.1:3000")    
})
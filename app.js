const express = require('express')
const cors = require('cors')

const app = express()

//处理跨域请求
app.use(cors())

//解析数据
app.use(express.json())      
// app.use(express.urlencoded({extends:false}))

//路由模块
const userRouter = require("./router/user.js")
app.use('/api',userRouter)

//错误级别中间级
app.use((err,req,res,next)=>{
    if(err){
        return console.log("出错了")
    }
})

app.listen(3000,()=>{
    console.log("serve is running at http://127.0.0.1:3000")    
})
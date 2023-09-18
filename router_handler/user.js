const db = require("../db/index.js")


//用户注册处理函数
exports.regUser = (req,res)=>{
    const data = req.body

    const sql = "select*from tb_users where username = ?"
    db.query(sql,data.username,(err,result)=>{
       if(err || result.length>0){
        return  res.json({
            code:200,
            msg:"用户已存在"
        })
       }
       
        const sqlStr = "insert into tb_users (username,password) values (?,?)"
        db.query(sqlStr,[data.username,data.password],(err,result)=>{
            if(err){
                return res.json({
                    code:200,
                    msg:err.message
                })
            }
            res.json({
                code:200,
                msg:"注册成功"
            })
        })
    })
}

//用户登录处理函数
exports.login = ()=>{
    res.json({
        code:200,
        msg:"登录成功"
    })
}
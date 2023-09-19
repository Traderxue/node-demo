const db = require('../db/index.js')

const bcrypt = require('bcryptjs')

exports.getUserInfo = (req,res)=>{
    const user = req.user
    const sql = "select id,username,nickname,email,user_pic from tb_users where username=?"
    db.query(sql,user.username,(err,result)=>{
        if(err||result.length!==1){
            console.log(err)
            return res.json({
                code:400,
                msg:"查询用户信息失败"
            })
        }
        return res.json({
            code:200,
            msg:"成功",
            data:result[0]          //查询到的结果是一个数组
        })
    })
}

exports.updateUserInfo = (req,res)=>{
    const data = req.body
    const sql = "update tb_users set nickname=?,email=? where id=?"
    db.query(sql,[data.nickname,data.email,data.id],(err,result)=>{
        if(err||result.affectedRows!==1){
            return res.json({
                code:400,
                msg:"数据更新失败"
            })
        }
        return res.json({
            code:200,
            msg:"数据更新成功"
        })
    })
}

exports.updatepwd = (req,res)=>{
    const data = req.body
    const sql = "select*from tb_users where username=?"
    db.query(sql,data.username,(err,result)=>{
        if(err||result.length!==1){
            return res.json({
                code:400,
                msg:"密码更新失败"
            })
        }
        const passwordMatch = bcrypt.compareSync(data.oldPassword,result[0].password)
        if(!passwordMatch){
            return res.json({
                code:400,
                msg:"旧密码错误，请重试"
            })
        }
        const sqlStr = "update tb_users set password = ? where username = ?"    
        data.password = bcrypt.hashSync(data.password)
        db.query(sqlStr,[data.password,data.username],(err,result)=>{
            if(err||result.affectedRows!==1){
                return res.json({
                    code:400,
                    msg:"更新用户密码失败"
                })
            }
            return res.json({
                code:200,
                msg:"更新用户密码成功"
            })
        })

    })
}
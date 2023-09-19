const db =require('../db/index.js')


exports.getArticle=(req,res)=>{
    const sql = "select*from tb_article where is_delete = 0"
    db.query(sql,(err,result)=>{
        if(err||result.length==0){
            return res.json({
                code:400,
                msg:"获取文章信息失败"
            })
        }
        res.json({
            code:200,
            msg:"获取文章列表成功",
            data:result
        })
    })
    
}


exports.addArticle=(req,res)=>{
    const data = req.body
    const sql = "insert into tb_article (title,content,cover_img,pub_date,cate_id,author_id) values (?,?,?,?,?,?)"
    db.query(sql,[data.title,data.content,data.cover_img,data.pub_date,data.cate_id,data.author_id],(err,result)=>{
        if(err||result.affectedRows!==1){
            return res.json({
                code:400,
                msg:"添加文章数据失败"
            })
        }
        return res.json({
            code:200,
            msg:"添加文章数据成功"
        })
    })

}

exports.deleteById=(req,res)=>{
    const sql = "update tb_article set is_delete=1 where id = ?"
    db.query(sql,req.params.id,(err,result)=>{
        if(err||result.affectedRows!==1){
            return res.json({
                code:400,
                msg:"数据删除失败"
            })
        }    
        return res.json({
            code:200,
            msg:"数据删除成功"
        })
    })
}
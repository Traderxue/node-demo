const db = require('../db/index.js')

exports.getCates = (req,res)=>{
    const sql = "select*from tb_article_cate where is_delete=0 order by id asc"
    db.query(sql,(err,result)=>{
        if(err||result.length==0){
            return res.json({
                code:400,
                msg:"获取文章分类失败"
            })
        }
        res.json({
            code:200,
            msg:"获取文章分类成功",
            data:result
        })
    })
}
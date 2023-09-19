# node文章管理接口项目

node版本 18+

## 实现功能

### 用户模块

用户登录<br> 
用户注册<br> 
查询用户信息<br> 
更新用户信息<br> 
重置用户密码<br> 
更换用户头像<br> 

### 文章分类模块
获取文章分类<br> 
添加分类<br>
根据id删除分类<br>
根据id获取分类<br>
根据id跟新分类<br>

### 数据表
![avator]("./img/tb_article.png")
![avator]("./img/tb_article_cate.png")
![avator]("./img/tb_users.png")

## 安装

```sh
npm install
```


## 运行

```sh
node app.js
```

## 踩坑

```sh
express-jwt版本要用5.3.3不然会验证token的时候会报错
```


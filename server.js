// 启动服务器
let express=require('express');
let app=express();
let mysql=require('mysql');
// 创建数据库连接
let connect = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'news'
});
// 连接数据库
connect.connect();
/*跨域 */
app.all('*',function(request,response,next){
    response.header('Access-Control-Allow-Origin','*');
    next();
});
// 使用get请求监听接口
app.get('/rec',function(request,response){
    // 查询数据库数据
    connect.query('select * from rec order by id desc',function(error,data){
        if(!error){
            response.json({
                status:200,
                data:data
            })
        }else{
            response.json({
                status:500,
                data:[]
            }) 
        }
    })   
});
// 详情页获取
app.get('/details',function(request,response){
    let id = request.query.data
    id=JSON.parse(id).newsId
    // 查询数据库数据
    connect.query('select * from rec where id=?',id,function(error,data){
        if(!error){
            response.json({
                status:200,
                data:data
            })
        }else{
            response.json({
                status:500,
                data:[]
            }) 
        }
    })   
});
app.get('/hot',function(request,response){
    // 查询数据库数据
    connect.query('select * from hot order by id desc',function(error,data){
        if(!error){
            response.json({
                status:200,
                data:data
            })
        }else{
            response.json({
                status:500,
                data:[]
            }) 
        }
    })   
});
// 接口监听
app.listen(3000);
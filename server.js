// 启动服务器
let express=require('express');
let app=express();
let mysql=require('mysql');
let nodemailer=require('nodemailer');
let nodemailerTransport=require('nodemailer-smtp-transport');
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
                status:501,
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
                status:502,
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
                status:503,
                data:[]
            }) 
        }
    })   
});
// 验证码
nodemailerTransport= nodemailer.createTransport(nodemailerTransport({
    service: 'QQ',
    auth: {
        user:  '913778520@qq.com',
        pass: 'snqykrfybchybdcf'
    },
    domains:["qq.com"],
    host:"smtp.qq.com",
    port:465,
    secure:true
}));
let sendEmail = function (recipient, subject, html,codeback) {
 
    nodemailerTransport.sendMail({
 
        from: '913778520@qq.com',
        to: recipient,
        subject: subject,
        html: html
 
    }, codeback);
}
app.get('/getCode',function(req,res){
    let email = req.query.email;
    let code = Math.round(Math.random() * 8999 + 1000);
    let html =`<h1 style="color:red">${code}</h1>`;
    let getCodeSu =sendEmail(email,'注册验证码',html,function(error,res){
        if(error){
            res.json({
                status:504,
                message: '验证码发送失败'
            })
        }else{
            let sql = 'insert into verfiy(email,code) values(?)';
            connect.query(sql,[[email, code]]);
        }   
    });
    if(getCodeSu){
        res.json({
            status:200,
            message:'验证码发送成功'
        })
    }else{
        res.json({
            status:508,
            message:'发送错误'
        })
    }
})
// 接口监听
app.listen(3000);
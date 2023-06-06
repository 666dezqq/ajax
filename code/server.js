//1、引入express
const express = require('express');

//2、创建应用对象
const app = express();

//3、创建路由规则
//request 是对请求报文的封装
//response 是对响应报文的封装
app.get('/server', (request, response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应体
    response.send('HELLO AJAX');
});

// all 可以接收任意类型的请求
app.all('/server', (request, response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置允许所有头信息 如自定义响应头
    response.setHeader('Access-Control-Allow-Headers','*');
    //设置响应体
    response.send('HELLO AJAX POST');
});

// all 可以接收任意类型的请求
app.all('/json-server', (request, response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置允许所有头信息 如自定义响应头
    response.setHeader('Access-Control-Allow-Headers','*');
    //响应一个数据
    const data = {
        name: 'zqq'
    };
    //对对象进行字符串转换
    let str = JSON.stringify(data);
    //设置响应体
    response.send(str);
});

//针对IE缓存
app.get('/ie', (request, response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应体
    response.send('HELLO IE');
});

//延时响应
app.get('/delay', (request, response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    setTimeout(() => {
        //设置响应体
    response.send('延时响应');
    },3000)
});

//JQuery 服务
app.all('/jquery-server', (request, response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置允许所有头信息 如自定义响应头
    response.setHeader('Access-Control-Allow-Headers','*');
    //设置响应体
    // response.send('Hello JQuery AJAX');
    const data = {name: 'zqq'}
    response.send(JSON.stringify(data));
});

//axios 服务
app.all('/axios-server', (request, response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置允许所有头信息 如自定义响应头
    response.setHeader('Access-Control-Allow-Headers','*');
    //设置响应体
    // response.send('Hello JQuery AJAX');
    const data = {name: 'zqq'}
    response.send(JSON.stringify(data));
});

//fetch 服务
app.all('/fetch-server', (request, response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置允许所有头信息 如自定义响应头
    response.setHeader('Access-Control-Allow-Headers','*');
    //设置响应体
    // response.send('Hello JQuery AJAX');
    const data = {name: 'zqq'}
    response.send(JSON.stringify(data));
});

//JSONP
app.all('/jsonp-server', (request, response) => {
    // response.send('console.log("hello jsonp")');
    const data = {
        name: 'zqq'
    };
    //将数字转化为字符串
    let str = JSON.stringify(data);
    //返回结果
    response.send(`handle(${str})`);
});

//用户名检测是否存在
app.all('/check-username', (request, response) => {
    // response.send('console.log("hello jsonp")');
    const data = {
        exit: 1,
        msg: '用户名已经存在'
    };
    //将数字转化为字符串
    let str = JSON.stringify(data);
    //返回结果
    response.send(`handle(${str})`);
});

//jquery发送jsonp请求
app.all('/jquery-jsonp-server', (request, response) => {
    // response.send('console.log("hello jsonp")');
    const data = {
        name: 'zqq',
        city: ['北京','上海','深圳']
    };
    //将数字转化为字符串
    let str = JSON.stringify(data);
    //接收callback参数
    let cb = request.query.callback;
    //返回结果
    response.send(`${cb}(${str})`);
});

//
app.all('/cors-server', (request, response) => {
    //设置响应头
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");
    response.setHeader("Access-Control-Allow-Method", "*");
    // response.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
    //返回结果
    response.send('HELLO CORS');
});

//4、监视端口启动
app.listen(8000, ()=>{
    console.log("服务器已经启动, 8000 端口监听中....");
})
'use strict';

const express = require("express");
const app = express();
const cors = require('cors')
let corsOptions = {
    origin: 'https://my.api.com'
}
app.use(cors(corsOptions))

app.get("/",(req,res)=>{
    console.log("->",req.url)
    res.send("<h1>Hello<h1>")
})

//API
app.get("/json",(req,res)=>{
    res.json({
        result:"ok get json data"
    })
})

// return status code
const http = require('http')
app.get('/info',(req,res)=>{
    res.json({
        // method: http.STATUS_CODES,
        res_msg: req,
    })
})


const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

const debug = (req,res,next) =>{
    console.log("middleware.debug ->",req.method,req.url);
    next();
}
app.use(debug)

const auth = (req,res,next)=>{
    console.log("auth : ",req.body)
    console.log("Account : ",req.body.Account," Password : ",req.body.Password);
    if(req.body.Account == "rucky-vemi") 
        next();
    else
        res.status(403).end();
}
app.post("/login",auth,(req,res)=>{
    console.log(req.body);
    res.redirect('/json')
})





const port = process.env.port || 3000;
app.listen(port,(err)=>{
    if(err) console.log("get error");
    console.log("It's ok","http://127.0.0.1:"+port)
})
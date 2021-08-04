var express = require('express');
var push = express();
global.__root = __dirname +'/';
global.__db =require(__dirname+'/db.js');

var retailer =require(__root+'/retailermanagement.js');
push.use('/api/get',retailer);

module.exports=push;

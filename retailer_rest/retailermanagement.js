var express = require('express'),
    push = express.Router(),
    bodyParser = require('body-parser')

    var shop_t = __db.shop
urlencodedParser = bodyParser.urlencoded({ extended: false })

push.use(bodyParser.json());
push.post('/Entry',urlencodedParser, function (req, res) {
    console.log(req.body)
    shop_t.create(req.body).then(function(added){
        res.status(200).send("Register");   
    },function(err){    
        res.status(500).send("Failed");
    })
})

push.post('/view',urlencodedParser,function(req,res){
	shop_t.findOne({raw:true,where:{name:req.body.name}}).then(function(user){
       var cost = parseInt(req.body.stack)* parseInt(user.price);
        console.log(cost)
        var remaing= parseInt(user.stack)-parseInt(req.body.stack)
        shop_t.update({stack:remaing},{where:{name:req.body.name}}).then(function(update){
        	return res.status(200).send("Your Paying Amount="+cost);
            },function(err){
            	return res.status(500).send("Amount update Failed")
            });
       
	})
	
})


push.post('/look',urlencodedParser,function(req,res){
	shop_t.findOne({raw:true,where:{name:req.body.name}}).then(function(user){
       var cost = parseInt(req.body.stack)* parseInt(user.price);
        console.log(cost)
        var remains= parseInt(user.stack)-parseInt(req.body.stack)
        shop_t.update({stack:remains},{where:{name:req.body.name}}).then(function(update){
        	return res.status(200).send("Your Paying Amount="+cost);
            },function(err){
            	return res.status(500).send("Amount update Failed")
            });
       
	})
	
})

module.exports=push;
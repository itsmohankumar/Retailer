var Sequelize = require('sequelize');
var db_name = "c_dbstore";

var sequelize = new Sequelize({
	host :'localhost',
	dialect:'sqlite',
	storage: db_name,
	logging: false
})


	try {
	sequelize.authenticate();
	console.log('connection has been establized successfully!!')
}catch(error){
	console.error('unable to connect the database',error)
}

var shop = sequelize.define('get',{
    id     : { type: Sequelize.UUID, defaultValue: Sequelize.UUIDV1, primaryKey: true },
    name   : { type: Sequelize.STRING,unique:true },
    type   : { type: Sequelize.STRING },
    stack  : { type: Sequelize.INTEGER,defaultValue: 0},
    price: { type: Sequelize.INTEGER, defaultValue: 0}
    })

sequelize.sync();
module.exports= {
	shop : shop

};
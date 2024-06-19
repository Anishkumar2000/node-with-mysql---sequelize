const dbconfig = require("./dbconfig");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbconfig.DB,dbconfig.USER,dbconfig.PASSWORD,{host:dbconfig.HOST,dialect:dbconfig.dialect});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.employees = require("./models/empmodel")(Sequelize,sequelize);

module.exports = db;
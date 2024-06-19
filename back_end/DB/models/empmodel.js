module.exports = (Sequelize,sequelize)=>{
    const employees = sequelize.define("employees",{
        name:{
            type:Sequelize.STRING
        },
        mobile:{
            type:Sequelize.INTEGER
        },
        email:{
            type:Sequelize.STRING
        },
        city:{
            type:Sequelize.STRING
        },
        password:{
            type:Sequelize.STRING
        }
    });
    return employees;
};
const Sequelize = require('sequelize')
const sequelize = new Sequelize('todolist','santos', '987250', {

    host: 'localhost',
    dialect: 'mysql'

})

sequelize.authenticate().then(()=>{console.log('conectado com o banco')}).catch((err)=>{console.log(err)})

module.exports = {

    Sequelize: Sequelize,
    sequelize: sequelize

}
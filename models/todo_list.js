const db = require('./db')

const todoList = db.sequelize.define('tarefas',{

    tarefa: {
        type: db.Sequelize.STRING
    }

});

//todoList.sync()

module.exports = todoList
// MODELS E DEPENDENCIAS
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')

const tarefas = require('./models/todo_list')
// APP
const app = express()
const PORT = 8081

// CONFING
    // templete engine
    app.engine('handlebars', handlebars({
        defaultLayout: 'main',
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true,
        },
    }))
    app.set('view engine', 'handlebars')    
// Body parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())


// STYLE
    app.use(express.static(__dirname + '/public'))


app.get('/', (req, res)=>{

    tarefas.findAll().then((tarefas)=>{
        res.render('./app',{tarefas: tarefas})
    })

})

app.post('/newTarefa', (req, res)=> {

    tarefas.create({
        tarefa: req.body.tarefa
    }).then(()=>{

        res.redirect('/')

    }).catch((err)=>{console.log(err)})

})

app.get('/newTarefa/remove/:id', (req, res)=> {

    tarefas.destroy({where:{'id': req.params.id}}).then(()=>{
        console.log('deletado com sucesso')
        res.redirect('/')
    }).catch(()=>{
        console.log('error ao deletar')
    })

})

app.listen(PORT,()=> {
    console.log('servidor rodando em: localhost:'+ PORT)
})
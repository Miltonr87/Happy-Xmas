// import module dependencies (lib)
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

// Starting Express
const server = express()
server
    //utilizar body do req
    .use(express.urlencoded({ extended:true }))

    // utilizando os arquivos estáticos
    .use(express.static('public'))

    // configurando o Template Engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    // criando rotas da aplicação do SQLite
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)


// ligar o servidor na porta 5000
server.listen(5000)


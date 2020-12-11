const express = require('express');
const routes = express.Router();

const ativosControllers = require('./controllers/ativoController');


routes.get('/ativos', ativosControllers.index);
routes.get('/ativos/:id', ativosControllers.show);
routes.post('/ativos', ativosControllers.store); 
routes.put('/ativos/:id', ativosControllers.update);
routes.delete('/ativos/:id', ativosControllers.destroy);

module.exports = routes;
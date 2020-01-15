const { Router } = require('express');

const DevControllers = require ('./controllers/devController');
const searchController = require('./controllers/searchController');

const routes = Router();

routes.get('/devs', DevControllers.index);
routes.post('/devs', DevControllers.store);

routes.get('/search', searchController.index);

module.exports = routes;
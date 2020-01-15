const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://laura:chobits14@cluster0-dijj7.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

// Metódos HTTP: GET, POST, PUT, DELETE 

// Tipos de parametros:
// Query Params: request.query (Filtros, ordenaçao, paginaçào.. )
// Route Params: request.params (identificar um recurso na alteracao ou remocao ) 
// Body: request.body (dados para criacao ou alteracao de um registro)

//MongoDB (Não relacional)




app.listen(3333);
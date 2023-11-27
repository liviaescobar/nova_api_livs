const express = require('express');


const studentsController = require('./route/studentsRouter')
const dotenv = require('dotenv').config();
const app = express();
app.set('port', process.env.PORT || 3333);

const router = require('./routes/rotas');
app.use('/api', router);

module.exports = app;
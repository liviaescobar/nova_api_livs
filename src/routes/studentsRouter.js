//Importtar pacote do express
const { Router } = require('express');

//Instanciar o Router na variavel router
const router = Router();

const{
    createStudent
} = require('../controllers/studentsController');

router.post('/create/student');

module.exports = router;
const express = require('express')
const router = express.Router();
const {getEstudiantesController, addEstudiantesController} = require('../controller/estudiantesController')

router.get('/estudiantes', getEstudiantesController)
router.post('/estudiantes', addEstudiantesController)

module.exports = router;
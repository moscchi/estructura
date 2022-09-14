const getEstudiantesServices = require('../services/getEstudiantesServices')
const addEstudiantesServices = require('../services/addEstudiantesServices')

const getEstudiantesController = async (req, res, next) => {
    try {
        const estudiantes = await getEstudiantesServices(next);
        res.json(estudiantes)
    } catch (error) {
        console.log(error);
        next();
    }
}
const addEstudiantesController = (req, res, next) => {
    try {
        const estudiantes = addEstudiantesServices(req, next)
        console.log(estudiantes);
        res.json(estudiantes)
    } catch (error) {
        next()
    }
}
module.exports = {getEstudiantesController, addEstudiantesController}
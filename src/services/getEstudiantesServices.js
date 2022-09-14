const fs = require('fs/promises')
const ruta = require('../db/index')
const getEstudiantesServices = async (next) => {
    try {
        const estudiantes = await fs.readFile(ruta+'/estudiantes.txt', 'utf-8');
        return JSON.parse(estudiantes)
    } catch (error) {
        next(error);
    }
}

module.exports = getEstudiantesServices
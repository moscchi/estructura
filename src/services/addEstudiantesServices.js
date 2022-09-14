const addEstudiantesServices = (req, next) => {
    try {
        const { name, lastName } = req.body;
        return { name, lastName }
    } catch (error) {
        next(error)
    }
}

module.exports = addEstudiantesServices;
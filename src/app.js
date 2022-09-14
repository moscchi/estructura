const server = require('./server/server')

const PORT = 8080

server.listen(PORT, () => {
    console.log(`Servidor andando en puerto ${PORT}`);
})
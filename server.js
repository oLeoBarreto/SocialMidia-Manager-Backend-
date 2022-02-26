const http = require('http');
const app = require('./src/index');
const server = http.createServer(app);

server.listen( 5000, () => {
    console.log('Aplicação rodando');
    console.log(`na porta: http://localhost:${5000}/`);
});
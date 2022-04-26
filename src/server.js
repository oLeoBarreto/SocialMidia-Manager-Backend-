const http = require('http');
const app = require('./index');
const server = http.createServer(app);

server.listen( 5000, () => {
    console.log('//=================================//');
    console.log('Aplicação rodando');
    console.log(`na porta: http://localhost:${5000}/`);
    console.log('//=================================//');
});
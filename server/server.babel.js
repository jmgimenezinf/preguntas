import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import os from 'os';
import preguntas from './routes/preguntas.js'
import cors from 'cors'

var interfaces = os.networkInterfaces();
var addresses = [];
for (var k in interfaces) {
    for (var k2 in interfaces[k]) {
        var address = interfaces[k][k2];
        if (address.family === 'IPv4' && !address.internal) {
            addresses.push(address.address);
        }
    }
}

const app = express();
const server = http.createServer(app);

//extended: false significa que parsea solo string (no archivos de imagenes por ejemplo)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use(preguntas);

server.listen(8080, addresses, function(){
 server.close(function(){
   server.listen(8080,addresses)
   console.log('Servidor!'+ addresses);
 })
})

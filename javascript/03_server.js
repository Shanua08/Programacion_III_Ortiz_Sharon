// server.mjs
import { createServer } from 'node:http';

const server = createServer((req, res) => {
    // Endpoint principal: /
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello World!\n');
    }
    // Endpoint de la API: /api
    else if (req.url === '/api' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ mensaje: '¡Bienvenido al endpoint de la API!', status: 'success' }));
    }
    // Nuevo endpoint: /contacto
    else if (req.url === '/contacto' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>Sección de Contacto</h1><p>¡Ponte en contacto con nosotros!</p>\n');
    }
    // Ruta no encontrada (404)
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Ruta no encontrada\n');
    }
});

// Starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3000');
});
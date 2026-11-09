import { createServer } from 'node:http';

const server = createServer((req, res) => {
    // Endpoint principal: /
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('¡Bienvenido a la Línea de Taxis Sharon Ortiz!\n');
    }
    // Endpoint de la API: /api
    else if (req.url === '/api' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ 
            mensaje: '¡Bienvenido a la API de la Línea de Taxis!', 
            status: 'success', 
            cooperativa: 'Sharon Ortiz' 
        }));
    }
    // Endpoint de contacto: /contacto
    else if (req.url === '/contacto' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>Central de Taxis Sharon Ortiz</h1><p>¡Ponte en contacto con nosotros para solicitar tu unidad 24/7!</p>\n');
    }
    // Ruta no encontrada (404)
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Ruta no encontrada en la central\n');
    }
});

// Inicia el servidor HTTP localmente en el puerto 3000
server.listen(3000, '127.0.0.1', () => {
    console.log('Servidor de la Línea de Taxis escuchando en 127.0.0.1:3000');
});
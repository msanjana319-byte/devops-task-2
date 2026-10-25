
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('DevOps Task 2: Jenkins CI/CD Pipeline is running!');
});

server.listen(3000, () => {
    console.log('App running on port 3000');
});

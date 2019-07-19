const http = require('http');

console.log('Starting the server at localhost:3000');

http
  .createServer((req, res) => {
    console.log(req);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Welcome to my Node.js Server</h1>');
    res.write(req.url);
    res.end();
  })
  .listen(3000);

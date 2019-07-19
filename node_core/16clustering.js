var cluster = require('cluster');
var http = require('http');

if (cluster.isMaster) {
  console.log('loading for the master');
  cluster.fork();
  cluster.fork();
} else {
  console.log('loading for the child');
  http
    .createServer(function(req, res) {
      res.writeHead(200);
      res.end(`This is from ${process.pid}`);
    })
    .listen(8000);
}

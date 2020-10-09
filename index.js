const express = require('express'),
      path = require('path'),
      app = new express(),
      http = require('http').Server(app);

const hostname = '192.168.0.30';
const port = 8000;

// Initialize express app and http server
//const app = express();
//const http = http_module.Server(app);

app.set('port', port); // set express to use this port

app.use(express.static(__dirname + '/public'));

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   switch (req.url) {
//    case "/home":
//      res.writeHead(200);
//      res.end("<h1>This is Home page</h1>");
//      break;
//    case "/about":
//      res.writeHead(200);
//      res.end("<h1>This is About page</h1>");
//      break;
//    default:
//      res.writeHead(200);
//      res.end("<h1>Raspberry Pi DL Demo!</h1>");
//      break;
//  }
// });

//app.get('*', (req, res) => {
//  res.sendFile(path.join(__dirname, 'pages', 'src', 'index.html'));
//});

// app.get('/', function(req, res)
// {
// 	res.redirect('host.js');
// });

const server = http.listen(app.get('port'), () => {
      console.info(`==> 🌎  Go to ` + hostname + `:${app.get('port')}`);
});

const io = require('socket.io').listen(server);


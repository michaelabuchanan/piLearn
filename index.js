const http_module = require('http'),
      express = require('express');

const hostname = '192.168.0.30';
const port = 8000;

// Initialize express app and http server
const app = express();
const http = http_module.Server(app);

app.set('port', port); // set express to use this port

app.use(express.static(path.join(__dirname, 'pages', 'build')));

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

const server = http.listen(app.get('port'), () => {
      console.info(`==> 🌎  Go to ` + HOST + `:${app.get('port')}`);
    });

const io = require('socket.io').listen(server);

const cors = require('cors'),
      express = require('express'),
      http_module = require('http'),
      path = require('path');

const hostname = '192.168.0.30';
const port = 8000;

// Initialize express app and http server
const app = express();
const http = http_module.Server(app);

app.set('port', port); // set express to use this port

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'public',  'index.html'));
    });
    

const server = http.listen(app.get('port'), () => {
      console.info(`==> 🌎  Go to ` + hostname + `:${app.get('port')}`);
});

const io = require('socket.io').listen(server);


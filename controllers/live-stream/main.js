module.exports = function (io) {
  ////////////////////////////////////////////////////////
  //// running demo and send outputs to client
  ////////////////////////////////////////////////////////
  // Run object detection python script.
  var spawn = require('child_process').spawn;
  var process = spawn('python', [
    '/home/madebymaze/Projects/capstone/traffic-analysis/cv/all/main.py',
  ]);

  // socket connection to run the demo
  io.on('connection', (socket) => {
    console.log('Socket: ' + socket.id + ' (connected)');

    process.on('close', (code) => {
      socket.emit('output', 'DONE');
    });
    socket.emit('start_stream', 'START output');

    socket.on('frame-to-server', (data) => {
      socket.broadcast.emit('frame-from-server', data.toString());
    });
    socket.on('objects-to-server', (data) => {
      socket.broadcast.emit('objects-from-server', JSON.parse(data.toString()));
    });
    socket.on('welcome', (data) => {
      console.log(data);
    });
    });
});

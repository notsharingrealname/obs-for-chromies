const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('start-stream', (data) => {
    // Handle the start-stream event here.
    console.log('Stream started:', data);
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
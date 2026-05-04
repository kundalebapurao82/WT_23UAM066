const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 3000 });

console.log('WebSocket Server running on port 3000');

server.on('connection', (socket) => {
  console.log('Client connected');

  // When message received
  socket.on('message', (message) => {
    console.log('Received:', message.toString());

    // Broadcast to all clients
    server.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message.toString());
      }
    });
  });

  socket.on('close', () => {
    console.log('Client disconnected');
  });
});
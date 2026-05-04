// Import HTTP module
const http = require('http');

// Create server
const server = http.createServer((req, res) => {

    // Set response header
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Get current date and time
    let currentDateTime = new Date();

    // Send response
    res.write("<h1>Hello, Welcome to tiny HTTP server</h1>");
    res.write("<p>Current Date & Time: " + currentDateTime + "</p>");

    // End response
    res.end();
});

// Port number
const PORT = 3000;

// Start server
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
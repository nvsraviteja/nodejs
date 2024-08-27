const http = require('http');

// Define the port number
const port = 3000;

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Set the response header
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    // Write the response body
    res.end('Hello, World!\n');
});

// Start the server and listen on the specified port
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

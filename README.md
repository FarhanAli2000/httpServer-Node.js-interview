🌐 Node.js HTTP Server Example

This repository contains a simple Node.js HTTP server that demonstrates the basics of creating a server using the built-in http module. The server listens on port 7000 and responds with a plain text message.

🚀 Table of Contents

🖥️ Code Explanation

This is a basic Node.js HTTP server created using the built-in http module.

http.createServer(): Creates an HTTP server that listens for incoming requests.

res.setHeader(): Sets the content type for the response to text/plain.

res.end(): Sends the response with the message "My name is Farhan Hye!".

server.listen(7000): The server listens on port 7000, and logs a message once it starts running.

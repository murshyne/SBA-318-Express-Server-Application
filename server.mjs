// import
import express from 'express';


const PORT = 3000
// Requestion object comes from client to server -->to server.
// Response Object goes from server -->client
const server = http.createServer((req,res)=>{
// In this code block will be all our logic, handling the request and formulating a response
// status code.
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end('What is up RTT-43');
});
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);

  });
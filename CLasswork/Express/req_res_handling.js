const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});


// Handling request and respose
// Express application handle HTTP request and response
/**
 * request: the req object contain information about the client request eg. URL, headers, query_parameters, Request_body
 * app.get('/',(req, res)=>{
 *    console.log(req.query.name)
 * })
 * Query parameter: /users?name = Akshay
 * 
 * 
 * Detailed study aboiut qury parameters.
 * Where we use query parameters in company level.
 * 
 */


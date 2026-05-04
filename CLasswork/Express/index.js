const express = require('express');
const app = express();
const port = 3000;

// function MiddleWare(req, res, next){
//     console.log(req.url);
//     next();
    
// }
// app.use(MiddleWare);

app.use((req, res, next)=>{
    console.log("Data received", new Date());
    next();
})

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/home', (req, res) => {
     res.send('Welcome to the Home Page');
    });

app.get('/about', (req, res) => {
    res.send('This is the About Page');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
const express = require('express');
const port = process.env.PORT || 5000 ; //Port

const app = express(); //ExpressInstance

//API Middleware

app.use(express.json()); //Accept data in json format

app.use(express.urlencoded()); //decode data to send through html form

app.use(express.static('public')); //to serve public folder as static folder

//API Routes
app.get('/',(req,res) => {
    res.send('Hello, this is the root route!');
});

app.get('/form',(req,res) => {
    res.sendFile(__dirname + '/public/index.html'); 
 });

app.post('/formPost',(req,res) => {
    console.log(req.body); //Data in body of request

    res.sendFile(__dirname + '/public/thanks.html');
})

app.listen(port, () => {
    console.group(`Server starter at http://localhost:${port}`)
})
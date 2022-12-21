const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const bodParser = require('body-parser');
mongoose
.connect('mongodb://127.0.0.1:27017/mydatabase')
.then( (x) => {
    console.log(`connected to mongo! Datbase name : "${x.connections[0].name} "`);
})

.catch( (err) => {
    console.error('error connecting to mongo', err.reason);
})

const bookRoute = require ('./routes/book.routes');
const bodyParser = require('body-parser');
const app = express();
app.use(bodParser.json())
app.use(
    bodyParser.urlencoded ( {
        extended:false,
    }),
)

app.use(cors())

// Static directory path
app.use(express.static(path.join(__dirname, 'dist/angulaCrud')))

// Api root
app.use('/api', bookRoute)

// port
const port=process.env.PORT || 8000
app.listen(port, () => {
    console.log('Listening on port ', port );
})

//404 handler
app.use( (req, res, next) => {
    next(createError(404))
})

// Base route
app.get('/',(req, res) => {
    res.send('invalid endpoints')
}) 
app.get('*', (req, res) => {
    res.sendFile(
        path.join(__dirname, 'dist/angularCrud/index.html')
    )
})

// error handler
app.use((err, req, res, next) => {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500
    res.status(err.statusCode).send(err.message)
})











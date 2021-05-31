const port = process.env.port;

const express = require('express');

const app = express();

const db = require('./models/db');

const routes = require('./routes/index');

app.use(express.static('assets'));


app.use('/', routes);
const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'));



app.listen(port || 8000, err => {
    if (!err)
        console.log(`Server running!`);
})
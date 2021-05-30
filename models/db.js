const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/BooksDB', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (!err) console.log("Connected to Database");
    else console.log("Not Connected to Database");
});

require('./books');
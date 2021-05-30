const mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
    book_name: { type: String },
    author: { type: String },
    available: { type: String }
});

module.exports = mongoose.model('Books', BookSchema);
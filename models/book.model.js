const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//схема книги
let Book = new Schema({
    book_title: {
        type: String
    },
    book_author: {
        type: String
    },
    book_text: {
        type: String
    }
});

module.exports = mongoose.model('Book', Book);
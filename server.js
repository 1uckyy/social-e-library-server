//default
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const bookRoutes = express.Router();
const PORT = process.env.PORT || 4000; //heroku
const path = require('path');

//получаем схему книги
let Book = require('./models/book.model');

//default
app.use(cors());
app.use(bodyParser.json());

//подключение к mongoDB Atlas
mongoose.connect( process.env.MONGODB_URI || 'mongodb+srv://Vlad123:Vlad123@devconnector-e46b3.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true }); //heroku
const connection = mongoose.connection;

//оповещение о подключении
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

//при маршруте /books в качестве ответа отдаются книги
bookRoutes.route('/').get(function(req, res) {
    Book.find(function(err, books) {
        if (err) {
            console.log(err);
        } else {
            res.json(books);
        }
    });
});

//при маршруте /books/id в качестве ответа выдаётся книга с указанным id
bookRoutes.route('/:id').get(function(req, res){
    let id = req.params.id;
    Book.findById(id, function(err, book){
        res.json(book);
    });
});

//при маршруте /books/query в качестве ответа выдаётся книга с указанным query
bookRoutes.route('/search/:query').get(function(req, res){
    let query = req.params.query;

    Book.find({
        'book_title': query
    }, function(err, result) {
        if (err) throw err;
        if (result) {
            res.json(result)
        } else {
            res.send(JSON.stringify({
                error : 'Error'
            }))
        }
    })
});

//при маршруте /books/add добавляется книга
bookRoutes.route('/add').post(function(req, res){
    let book = new Book(req.body);
    book.save()
        .then(book => {
            res.status(200).json({'book': 'book added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new book failed');
        });
})

//при маршруте /books/delete/id удаляется книга с указанным id
bookRoutes.route('/delete/:id').delete(function(req, res) {
    Book.findByIdAndDelete(req.params.id, function(err, book){
        if(err) return console.log(err);
        else 
        res.json('Book removed');
    })
});

//обновление информации о книге с указанным id
bookRoutes.route('/update/:id').post(function(req, res){
    Book.findById(req.params.id, function(err, book){
        if(!book)
            res.status(404).send('book is not found');
        else
            book.book_title = req.body.book_title;
            book.book_author = req.body.book_author;
            book.book_text = req.body.book_text;

            book.save().then(book => {
                res.json('Book updated');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    })
})

//пользователи
var Users = require('./routes/user.routes');
app.use('/users', Users);

//маршрут начинается с /books
app.use('/books', bookRoutes);



//heroku
app.use(express.static(path.join(__dirname, 'build')))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})


// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('client/build'));

//     app.get('*', (req, res) => {
//         res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
//     });
// }

//default
app.listen(PORT, function(){
    console.log("Server is running on Port: " + PORT);
});
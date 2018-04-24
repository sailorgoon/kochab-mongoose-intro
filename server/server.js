
const express = require('express');
const mongoose = require('mongoose');
const Book = require('./models/book.schema');
const app = express();
const PORT = process.env.PORT || 5000;
// // const bodyParser = require('body-parser');
// let books = require('./routes/books.router');

// const bookCollection = [
//     {
//         title: "A Tale of Two Cities",
//         author: "Charles Dickens",
//         edition: 2,
//         published: '1859-05-20'
//     },
//     {
//         title: "Murder on the Orient Express",
//         author: "Agatha Christie",
//         edition: 2
//     },
//     {
//         title: "Snow Crash",
//         author: "Neal Steve",
//         edition: 1.2,
//         ratings: [
//             { score: 5 },
//             { score: 1 }
//         ]
//     },
//     {
//         title: "Catcher in the Rye",
//         author: "Someone",
//         edition: 1,
//         ratings: [
//             { score: 2 },
//             { score: 5 },
//             { score: 3.5 },
//             { score: 4 }
//         ]
//     }
// ];

// app.use(bodyParser.urlencoded({extended:true})); 

app.use(express.static('server/public'));

// connecting to mongo start-----------------

const databaseUrl = 'mongodb://localhost:27017/library'

mongoose.connect(databaseUrl);

mongoose.connection.on('connected', () => {
    console.log(`mongoose connected to ${databaseUrl}`)
});

mongoose.connection.on('error', (error) => {
    console.log('mongoose connection error')
})
//connecting to mongo end--------------------------

app.get('/books', (req, res) => {
    Book.find({})
        .then((dataFromDatabase) => {
            console.log('data from database', dataFromDatabase);
            res.send(dataFromDatabase);
    })
    .catch((error) => {
        console.log('error with Book.find', error)
        res.sendStatus(500);
    });
});


// app.use('/books');

// router.get('/', (req, res) => {
//     res.send(books);

app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});

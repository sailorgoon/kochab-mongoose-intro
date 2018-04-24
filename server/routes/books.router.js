const express = require('express');
const router = express.Router();
const books = [
    {
        title: "A Tale of Two Cities",
        author: "Charles Dickens",
        edition: 2,
        published: '1859-05-20'
    },
    {
        title: "Murder on the Orient Express",
        author: "Agatha Christie",
        edition: 2
    }
];


module.exports = router;
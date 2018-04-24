const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bookSchema = new Schema({
    title: { type: String, required: true, unique: true },
    author: { type: String, required: true }
});

module.exports = mongoose.model('Book', bookSchema);
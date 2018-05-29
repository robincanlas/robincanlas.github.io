const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
	name: {type: String, default: ''},
	_author: {type: mongoose.Schema.Types.ObjectId, ref: 'authors'}
});

const Book = mongoose.model('books', BookSchema);

module.exports = Book;
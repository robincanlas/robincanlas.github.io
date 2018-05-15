const mongoose = require('mongoose');
const async = require('async');
const assert = require('assert');
const Author = require('../models/author-model');
const Book = require('../models/book-model');


describe('Foreign Key Test', () => {
	// TEST CODE HERE

	it('has a foreign key', (testDone) => {
		var books = ['Stardust', 'The Sandman'];

		var author = new Author({
			_id: new mongoose.Types.ObjectId(),
			name: 'Neil Gaiman'
		});

		author.save((err) => {
			if(err) console.log('ERROR SAVING AUTHOR ' + err)
			// testDone()
			async.each(books, (value, done) => {
				var book = new Book({
					name: value,
					_author: author._id
				});

				book.save((err) => {
					if(err) console.log('ERROR SAVING A BOOK ' + err)
					done();
				});
			}, (err) => {
				//done Test
				testDone();
			});
		});
	});


});
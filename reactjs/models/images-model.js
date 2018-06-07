var mongoose = require('mongoose');

exports.imagesSchema = new mongoose.Schema({ // section
	src: {type: String, default:''}
});
exports.ImagesModel = mongoose.model('images', exports.imagesSchema);
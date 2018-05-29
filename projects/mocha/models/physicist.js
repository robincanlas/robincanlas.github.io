const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhysicistSchema = new Schema({
	name: {type: String, default: ''}
});

const Physicist = mongoose.model('physicists', PhysicistSchema);

module.exports = Physicist;
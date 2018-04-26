var mongoose = require('mongoose');

exports.accsSchema = new mongoose.Schema({ // section
 id : String
});
exports.AccsModel = mongoose.model('accs', exports.accsSchema);
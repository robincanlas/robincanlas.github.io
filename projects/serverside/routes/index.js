/*
 * INDEX
 */
exports.index = function(req, res){
  res.render('index', { title: 'Basic Server' });
};

exports.lobby = function(req, res){
  res.render('lobby', { title: 'Home Page' });
};

exports.table = function(req, res){
  res.render('table', { title: 'Table' });
};
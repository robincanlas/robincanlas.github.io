const express = require('express');
const app = express();
const path = require('path');
const port = 9999;


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
	res.render('index', {title: 'React App'})
});

app.listen(port, () => {
	console.log('server listening to port '+port);
});
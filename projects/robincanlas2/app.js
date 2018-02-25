const express = require('express');

const app = express();

const path = require('path');
const port = 6969;

app.set('view engine', 'jade');
app.set('views', 'views');

app.use(express.static( path.join(__dirname, 'public') ));

app.get('/', (req, res) => {
	res.render('index', { title: 'React Application' });
});

app.listen(port, () => {
	console.log('server listening to port '+port);
});
const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '.', 'build');
const port = process.env.PORT || 4000;

app.use(express.static(publicPath));

app.get('*', (req, res) => {
   res.sendFile(path.join(publicPath, 'index.html'));
});

app.post('/play', function (req, res) {
   res.send('POST request to the play');
 });

app.listen(port, () => {
   console.log('Server is up!');
});
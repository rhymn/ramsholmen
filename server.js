var express = require('express');
var app = express();

var port = 3200;

app.set('port', port);
app.use(express.static(__dirname + '/'));

app.listen(port);

console.log('ePsy App listening on port ' + port);
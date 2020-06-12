var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public')); //__dir and not _dir
var port = 3333; // you can use any port
app.listen(port);
console.log('Server listen on port ' + port);

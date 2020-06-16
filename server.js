var express = require('express');
const path = require('path');
const { nextTick } = require('process');
const router = express.Router();
var app = express();
//app.use("/helloworld", express.static(path.join(__dirname + '/public'))); //__dir and not _dir
var port = 3333; // you can use any port


router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

router.get('/test',function(req,res){
    res.sendFile(path.join(__dirname+'/public/test.html'));
});


app.use('/helloworld/', router);
app.listen(port);
console.log('Server listen on port ' + port);




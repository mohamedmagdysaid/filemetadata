//
// # SimpleServer
//
// A simple chat server using Socket.IO, Express, and Async.
//
var http = require('http');
var path = require('path');
var fs =require("fs");

var async = require('async');
var socketio = require('socket.io');
var express = require('express');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })


var app = express();
var server = http.createServer(app);


app.use(express.static(path.resolve(__dirname, 'client')));
var port = process.env.PORT || 5000 ;
app.set("port",port);

app.get('/',function(req,res){
  res.send('/index.html',function(err){
    if (err) throw err;
  })
})

app.post('/upload', upload.single('file'), function (req, res) {
  
  var filedetails = {
  FileName : req.file.originalname,
  Size : (req.file.size+' Bytes')
}

    res.send(filedetails);

 
  

  // req.file is the `avatar` file 
  // req.body will hold the text fields, if there were any
 
})



app.listen(port,function(){
      console.log("App is running on port "+port)
});

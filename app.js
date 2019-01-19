//*
var http = require('http');
var fs = require('fs');
const port = 8080 

var server = http.createServer(function(req, res) {
	res.writeHead(200, { 'Content-Type': 'text/html' });
	//content = 'hello';
	//res.end(content);
	var readSream = fs.createReadStream('index.html','utf8')
	readSream.pipe(res);
});
server.listen(port);//process.env.PORT
//*/

/*

const express = require('express');
const app = new express();

app.get('/', function(request, response){
    response.sendfile('index.html');
});
//*/

/*
const express = require('express')
const app = express()
const port = 8080 

app.get('/', (request, response) => {
  response.send('Hello from Express!')
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log('server is listening on ${port}')
})
//*/

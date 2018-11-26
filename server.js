const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/todos-app'));

app.get('*', function(req, res){
	res.sendFile(path.join(__dirname + '/dist/todos-app/index.html'));
});


app.listen(process.env.PORT || 8080);

console.log("Server is running");
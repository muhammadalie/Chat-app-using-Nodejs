"use strict"
const net = require('net');
var readline = require('readline');


var client = net.connect({port: 5432},
    function() {
  	console.log('connected to server!');
  	var rl = readline.createInterface({
  	    input: process.stdin,
  	    output: process.stdout
  	});
  	rl.on('line', function (data){
  	    client.write(data);
	});

});

client.on('data', function(data) {
  console.log(data.toString());
});

client.on('close', function () {
     console.log("server disconnected !!!!") ;  
});


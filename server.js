const net = require('net');
var clients = [];
var server=net.createServer(function (connection) {
    clients.push(connection);
    connection.name ="user - "+clients.length; 

    connection.write("Welcome\n");
        send(connection.name + " joined\n", connection);

    connection.on('data', function (data) {
	send(connection.name + " : " + data, connection)
    });

    connection.on('end', function () {
	clients.splice(clients.indexOf(connection), 1);
	send(connection.name + " left the chat.\n");
    });

    function send(message, sender) {
	clients.forEach(function (client) {

	    if (client === sender) return;
	    client.write(message);
	});
    }; 
});
server.listen(5432,function(){
    console.log("MY CHAT SERVER\n","start to chat... enjoyy\n","listening for new subscribers...\n");
});


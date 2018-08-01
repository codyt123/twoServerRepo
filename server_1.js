var http = require("http");

var PORT_1 = 7000;
var PORT_2 = 7500;

function handleRequest_1(request, response){
    response.end("You're the best in the whole world! "+ request.url)
}

function handleRequest_2(request, response){
    response.end("You're the worst in the whole world!" + request.url)
}

var server_1 = http.createServer(handleRequest_1);
var server_2 = http.createServer(handleRequest_2);

server_1.listen(PORT_1, function(){
    console.log("Server is listening on http://localhost:" + PORT_1)
});

server_2.listen(PORT_2, function(){
    console.log("Server is listening on http://localhost:" + PORT_2)
});

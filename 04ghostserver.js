//import * as http from 'http'

let http = require('http')

//use anonymous/ghost function -> anonymous/ghost
//function does not have any name
let firstServer = http.createServer(function(request, response){
    console.log("creating server....")
    response.writeHead(200, {'Content-Type':'text/html'})
    response.write("<h1>Hello from node server</h1>")
    response.write("<ol>")
    response.write("<li>item one</li>")
    response.write("<li>item two</li>")
    response.write("<li>item three</li>")
    response.write("</ol>")
    response.end()
})

firstServer.listen(8888, function(){
    console.log("Listening on port 8888")
})
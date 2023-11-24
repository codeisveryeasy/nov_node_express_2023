//import * as http from 'http'

let myhttp = require('http')

function callBackFunction(request, response){
    console.log("creating server....")
    response.writeHead(200, {'Content-Type':'text/html'})
    response.write("<h1>Hello from node server</h1>")
    response.write("<ol>")
    response.write("<li>item one</li>")
    response.write("<li>item two</li>")
    response.write("<li>item three</li>")
    response.write("</ol>")
    response.end()
   

}


//use named callback function
let firstServer = http.createServer(callBackFunction)

firstServer.listen(8888)
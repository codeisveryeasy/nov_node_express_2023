let express = require('express')
let mongoose = require('mongoose')
const programming = require('./programming')

//create express app
let app = express()
//configure express app to encode/decode
//JSON
app.use(express.json())

//connect to mongodb database
let dbstring = "mongodb+srv://mongodbuser:mongodbpassword@cluster0.nezoluq.mongodb.net/youtubedb"
mongoose.connect(dbstring)
let db = mongoose.connection

//check if connection to db is success
db.on('open', ()=>{
    console.log("Connected to mongodb database in the cloud!");
})


//get the list of youtube videos 
//GET http://localhost:1234/1.0/youtube/all
app.get("/1.0/youtube/all", (request, response)=>{
    //use model instance to find all documents from database
    programming.find({})
                .then((data)=>{
                    console.log("query success for /1.0/youtube/all ")
                    response.json(data)
                })
                .catch((error)=>{
                    console.log("error for /1.0/youtube/all ")
                    response.json(error)
                })
})

//GET http://localhost:1234/
app.get("/", (request, response)=>{
    console.log("GET request received for / endpoint");
    response.send("Hello from express API, GET")
})

//GET http://localhost:1234/welcome
app.get("/welcome", (request, response)=>{
    console.log("GET request received for /welcome endpoint");
    response.send("Welcome to express API, GET")
})

//POST http://localhost:1234/welcome
app.post("/welcome", (request, response)=>{
    console.log("POST request received for /welcome endpoint");
    response.send("Welcome to express API, POST")
})

app.listen(1234, ()=>{
    console.log("Listening on port 1234")
})
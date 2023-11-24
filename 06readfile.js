)
let fs = require('fs')

fs.readFile("hello1.txt", (error, data)=>{
    console.log("attempting to read the file")
    if (error) {
        throw error
    }
    console.log("file read success")
    console.log(data)
    console.log(data.toString())
})
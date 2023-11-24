let fs = require('fs')

let arguments = process.argv

console.log(arguments)

let readFrom = arguments[2]
let writeTo = arguments[3]

fs.readFile(readFrom, (error, data)=>{
    if (error) {
        throw error
    }

    console.log("read success: " + readFrom)
    fs.writeFile(writeTo, data, (error)=>{
        if (error) {
            throw error
        }
        console.log("file write success: " + writeTo);
    } )
})



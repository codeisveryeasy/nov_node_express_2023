let fs = require('fs')


let message = 'Hello node Selamat Pagi शुभ प्रभात おはよう 좋은 아침이에요'

let message1 = `Hello node
                Selamat Pagi
                शुभ प्रभात
                おはよう
                좋은 아침이에요`

fs.writeFile("myfile.txt", message1, (error)=>{
    if (error) {
        throw error
    }
    console.log("write file success")
})
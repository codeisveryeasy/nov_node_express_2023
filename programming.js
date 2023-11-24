//model file

let mongoose = require('mongoose')

//setup schema
let youtubeSchema = mongoose.Schema

//set collection configuration
let programmingCollection = new youtubeSchema({
    "id":Number,
    "videoid":String,
    "title":String
}, {collection:"programmingvideos"})

module.exports = mongoose.model('programming', programmingCollection)
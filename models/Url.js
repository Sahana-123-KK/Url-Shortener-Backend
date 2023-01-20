const mongoose = require("mongoose")

const UrlSchema = new mongoose.Schema({
    urlCode: String,
    longUrl: String,
    shortUrl: String,
    date: { type: String, default: Date.now }
})


const UrlModel = mongoose.model("Url", UrlSchema)


module.exports = UrlModel
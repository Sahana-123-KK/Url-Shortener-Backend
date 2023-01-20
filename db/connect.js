const mongoose = require("mongoose")

const connect = async () => {
    await mongoose.connect("mongodb+srv://sahana:sahana@cluster0.jnbpr1b.mongodb.net/urlshortener?retryWrites=true&w=majority", { useNewUrlParser: true }, () => {
        console.log("Connected To db")
    })
}

module.exports = connect
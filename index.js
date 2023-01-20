const express = require("express")

const app = express()
const connect = require("./db/connect")
app.use(express.json({ extended: false })) //--> new and important to note.

connect()




app.use("/api/url", require("./routes/index"))
app.use("/", require("./routes/url"))
app.listen(7000, () => {
    console.log("Listening To Url Shortener Backend...")
})


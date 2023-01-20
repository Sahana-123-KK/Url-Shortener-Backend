const express = require("express")

const app = express()
const connect = require("./db/connect")
app.use(express.json({ extended: false }))

connect()


// app.get("/", (req, res) => {
//     res.send("Hello")
// })

app.use("/api/url", require("./routes/index"))
// app.use("/api/url", require("./routes/url"))
app.listen(7000, () => {
    console.log("Listening To Url Shortener Backend...")
})


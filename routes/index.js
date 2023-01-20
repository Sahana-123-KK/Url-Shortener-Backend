const express = require("express")
const { model } = require("mongoose")
const valiUrl = require("valid-url")
const shortId = require("shortid")

const router = express.Router()
const UrlModel = require("../models/Url")


// router.get("/",(req,res)=>{
//     res.send("nice to meet you here...")
// })

router.post("/shorten", async (req, res) => {
    const { longUrl } = req.body
    const baseUrl = "http://localhost:7000" //--> Don't add / to the last, if so then don't concatinate "/" to baseURL
    if (!valiUrl.isUri(baseUrl)) {
        return res.status(402).json("Not a valid Base Url")
    }

    let urlCode = shortId.generate()
    console.log(urlCode)

    if (valiUrl.isUri(longUrl)) {
        try {
            let url = await UrlModel.findOne({ longUrl })
            if (url) {
                res.json(url)
            }
            else {
                const shortUrl = baseUrl + "/" + urlCode
                url = await UrlModel.create({ shortUrl, longUrl, urlCode, date: new Date() })
                res.json(url)
            }
        } catch (error) {
            console.log(error)
            return res.status(500).json("Server Error")
        }
    }
    else {
        return res.status(402).json("Invalid Long URL")
    }
})




module.exports = router
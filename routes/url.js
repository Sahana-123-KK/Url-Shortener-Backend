const express = require("express")
const UrlModel = require("../models/Url")
const router = express.Router()


router.get("/:code", async (req, res) => {
    try {
        const url = await UrlModel.findOne({ urlCode: req.params.code })
        if (url) {
          return  res.redirect(url?.longUrl)
        }
        else {
            return res.status(404).json("Url Not Found")
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json("Server Error")
    }
})





module.exports = router
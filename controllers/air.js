const express = require("express")
const router = express.Router()

const elements = {
    air: {
        signs: ['aquarius', 'gemini', 'libra'],
        traits: ["movement", "vcreativity", "action"]
    },
    water: {
        signs: ['pisces', 'cancer', 'scorpio'],
        traits: ['private', 'mysterious', 'pyshic']
    },
    fire: {
        signs: ['aries', 'leo', 'sagittarius'],
        traits: ['passionate', 'strong emtions', 'tempermental']
    },
    earth: {
        signs: ['taurus', 'virgo', 'capricorn'],
        traits: ['grounded', 'helpful', 'practical']
    }
}

// GET /air
router.get("/", function(req, res) {
    // res.send("AIR")
    // rendering data with view
    const signs = elements.air.signs
    const traits = elements.air.traits
    res.render("show.ejs", {signs:signs, traits:traits, element: "air"})    
})

router.get("/:sign", function(req,res) {
    // res.send(req.params.sign)
    const symbol = req.params.sign
    res.render("sign.ejs", {symbol: req.params.sign})
})

module.exports = router
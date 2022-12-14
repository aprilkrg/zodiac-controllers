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

// GET /water
router.get("/", function(req, res) {
    // res.send("WATER")
    // check the data
    // res.send(elements.water.traits)
    // rendering data with view
    const signs = elements.water.signs
    const traits = elements.water.traits
    res.render("show.ejs", {signs:signs, traits:traits, element: "water"})
})


router.get("/:sign", function(req,res) {
    // res.send(req.params.sign)
    const symbol = req.params.sign
    res.render("sign.ejs", {symbol: req.params.sign})
})

module.exports = router
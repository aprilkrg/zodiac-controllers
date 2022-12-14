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

// full url is loaclhost:3000/earth
// GET /earth
router.get("/", function(req, res) {
    // res.send("EARTH")
    // rendering data with view
    const signs = elements.earth.signs
    const traits = elements.earth.traits
    res.render("show.ejs", {signs:signs, traits:traits, element: "earth"})  
})

router.get("/:sign", function(req,res) {
    // res.send(req.params.sign)
    const symbol = req.params.sign
    res.render("sign.ejs", {symbol: req.params.sign})
})

module.exports = router
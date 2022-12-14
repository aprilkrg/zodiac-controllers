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

// GET /fire
router.get("/", function(req, res) {
    // res.send("FIRE")
    // rendering data with view
    const signs = elements.fire.signs
    const traits = elements.fire.traits
    res.render("show.ejs", {signs:signs, traits:traits, element: "fire"})  
})

router.get("/:sign", function(req,res) {
    // res.send(req.params.sign)
    const symbol = req.params.sign
    res.render("sign.ejs", {symbol: req.params.sign})
})

module.exports = router
const express = require("express")
const router = express.Router()

const earth = {
    type: "earth",
    signs: ["Taurus", "Virgo", "Capricorn"], 
    traits: ["grounded", "helpful", "practical", "realistic", "materialistic", "dependable"]
}

// main air route
// http GET url localhost:8000/air
router.get("/", (req, res) => {
    res.render("show", {element: earth})
})

// air sign route
// http GET url localhost:8000/air/:sign
router.get("/:sign", (req, res) => {
    // res.send(req.params.sign)
    res.render("sign", {sign: req.params.sign})
})

module.exports = router
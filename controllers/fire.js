const express = require("express")
const router = express.Router()

const fire = {
    type: "fire",
    signs: ["Aries", "Leo", "Sagittarius"], 
    traits: ["passionate", "strong emotions", "tempermental", "energetic", "accomplished", "interesting"]
}

// main air route
// http GET url localhost:8000/air
router.get("/", (req, res) => {
    res.render("show", {element: fire})
})

// air sign route
// http GET url localhost:8000/air/:sign
router.get("/:sign", (req, res) => {
    // res.send(req.params.sign)
    res.render("sign", {sign: req.params.sign})
})

module.exports = router
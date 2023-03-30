const express = require("express")
const app = express()

const PORT = 8000

// graphic represented as an object
const elements = {
    air: { 
        type: "air",
        signs: ["Aquarius", "Gemini", "Libra"], 
        traits: ["movement", "creativity", "action", "adventure", "exciting", "easily provoked"]
    },
    water: {
        type: "water",
        signs: ["Pisces", "Cancer", "Scorpio"], 
        traits: ["private", "mysterious", "pyshic", "charming", "emotional", "sensitive"]
    },
    fire: {
        type: "fire",
        signs: ["Aries", "Leo", "Sagittarius"], 
        traits: ["passionate", "strong emotions", "tempermental", "energetic", "accomplished", "interesting"]
    },
    earth: {
        type: "earth",
        signs: ["Taurus", "Virgo", "Capricorn"], 
        traits: ["grounded", "helpful", "practical", "realistic", "materialistic", "dependable"]
    }
}

// set the view engine
app.set("view engine", "ejs")

// ROUTES
// http GET url localhost:8000/
// home route
app.get("/", (req, res) => {
    res.render("index")
})

// air
// http GET url localhost:8000/air
app.get("/air", (req, res) => {
    res.render("show", {element: elements.air})
})
// water
// http GET url localhost:8000/water
app.get("/water", (req, res) => {
    res.render("show", {element: elements.water})
})
// earth
// http GET url localhost:8000/earth
app.get("/earth", (req, res) => {
    res.render("show", {element: elements.earth})
})
// fire
// http GET url localhost:8000/fire
app.get("/fire", (req, res) => {
    res.render("show", {element: elements.fire})
})

app.listen(PORT, () => {
    console.log(`smooth smooth sounds of javascript coming from port ${PORT}`)
})
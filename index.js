// require express package and invoke
const express = require("express")
const app = express()
// create port variable
const PORT = 3000
// configuration ^^^ (THIS SHOULD ALWAYS BE BEFORE THE ROUTES)

// data created from the zodiac.jpeg
// a skill to work on is looking at information, organizing it, and translating it to usable javascript data 
// for `elements` I could either use an array or an object. I started with an array, but then thinking about how I was gonna pass the data to the `res.send` I wanted to be able to say something simple like `elements.air` so I could be sure what I was getting, instead of using an index number. 
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
// HOME ROUTE
// HTTP method = GET
// URL pattern = "localhost:3000/"
app.get("/", (req, res) => {
    // // ROUTE CHECK
    // res.send("HOME PAGE")
    // // SEND VIEW
    res.render("index.ejs")
})

// AIR ROUTE
// HTTP method = GET
// URL pattern = "localhost:3000/air"
app.get("/air", (req, res) => {
    // // ROUTE CHECK
    // res.send("AIR")
    // // SEND DATA
    // res.json(elements.air)
    // // SEND VIEW
    res.render("show.ejs", {element: elements.air})
})

// WATER ROUTE
// HTTP method = GET
// URL pattern = "localhost:3000/water"
app.get("/water", (req, res) => {
    // // ROUTE CHECK
    // res.send("WATER")
    // // SEND DATA
    // res.json(elements.water)
    // // SEND VIEW
    res.render("show.ejs", {element: elements.water})
})

// EARTH ROUTE
// HTTP method = GET
// URL pattern = "localhost:3000/earth"
app.get("/earth", (req, res) => {
    // // ROUTE CHECK
    // res.send("EARTH")
    // // SEND DATA
    // res.json(elements.earth)
    // // SEND VIEW
    res.render("show.ejs", {element: elements.earth})
})

// FIRE ROUTE
// HTTP method = GET
// URL pattern = "localhost:3000/fire"
app.get("/fire", (req, res) => {
    // // ROUTE CHECK
    // res.send("FIRE")
    // // SEND DATA
    // res.json(elements.fire)
    // // SEND VIEW
    res.render("show.ejs", {element: elements.fire})
})


// create listener (THIS SHOULD ALWAYS BE AT THE BOTTOM)
app.listen(PORT, () => {
    console.log(`Server live and listening on port ${PORT}`)
})
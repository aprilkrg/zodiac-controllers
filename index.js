const express = require("express")
const app = express()
const PORT = 3000

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

// routes
// full url is localhost:3000/
// GET /
app.get("/", function(req, res) {
    // check the route
    // res.send("home page")
    // render
    res.render("index.ejs")
})
// GET /water
app.get("/water", function(req, res) {
    // res.send("WATER")
    // check the data
    // res.send(elements.water.traits)
    // rendering data with view
    const signs = elements.water.signs
    const traits = elements.water.traits
    res.render("show.ejs", {signs:signs, traits:traits})
})
// GET /air
app.get("/air", function(req, res) {
    // res.send("AIR")
    // rendering data with view
    const signs = elements.air.signs
    const traits = elements.air.traits
    res.render("show.ejs", {signs:signs, traits:traits})    
})
// GET /fire
app.get("/fire", function(req, res) {
    // res.send("FIRE")
    // rendering data with view
    const signs = elements.fire.signs
    const traits = elements.fire.traits
    res.render("show.ejs", {signs:signs, traits:traits})  
})
// GET /earth
app.get("/earth", function(req, res) {
    // res.send("EARTH")
    // rendering data with view
    const signs = elements.earth.signs
    const traits = elements.earth.traits
    res.render("show.ejs", {signs:signs, traits:traits})  
})


app.listen(PORT, function(){
    console.log("server is running on port " + PORT)
})
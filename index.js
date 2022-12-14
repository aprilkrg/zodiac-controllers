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

// middlewares
app.use(express.static("public"))

// controllers
app.use("/water", require("./controllers/water"))
app.use("/air", require("./controllers/air"))
app.use("/earth", require("./controllers/earth"))
app.use("/fire", require("./controllers/fire"))

// routes
// full url is localhost:3000/
// GET /
app.get("/", function(req, res) {
    // check the route
    // res.send("home page")
    // render
    res.render("index.ejs")
})

app.listen(PORT, function(){
    console.log("server is running on port " + PORT)
})
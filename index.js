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
app.use(express.static("public"))

// CONTROLLERS
app.use("/air", require("./controllers/air"))
app.use("/water", require("./controllers/water"))
app.use("/earth", require("./controllers/earth"))
app.use("/fire", require("./controllers/fire"))

// ROUTES
// http GET url localhost:8000/
// home route
app.get("/", (req, res) => {
    res.render("index")
})


app.listen(PORT, () => {
    console.log(`smooth smooth sounds of javascript coming from port ${PORT}`)
})
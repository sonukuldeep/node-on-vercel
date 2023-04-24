//Imports
require('dotenv').config()
const express = require("express")
const app = express()
const routes = require('./app/routes')

//Routes
//const apiRoutes = require('./routes/apiRoutes')

//Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Set the view engine to EJS
app.set('view engine', 'ejs')

// Serve static files from a public folder
app.use(express.static('public'))

app.use('/api/run', routes)
/*
// Routes

// Register userRoutes middleware
app.use('/api', apiRoutes);

app.get("/", function (req, res) {
    res.status(200).render("home",)
})

app.get("/about", function (req, res) {
    res.status(200).render("about",)
})

app.get("/contact", function (req, res) {
    res.status(200).render("contact",)
})

app.post("/", function (req, res) {
    const { num1, num2 } = req.body
    res.status(200).send("The sum of these numbers is " + num1 + num2)
})

// if port exist then run else deploy on vercel
if(process.env.PORT) {   
    // Start the server
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`)
    })
} else {
    module.exports = app;
}
*/
app.listen()
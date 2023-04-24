// imports
const express = require("express")
const app = express()
const router = express.Router()

//Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


app.get("/test", function (req, res) {
    res.status(200).send("works")
})

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

module.exports = app;

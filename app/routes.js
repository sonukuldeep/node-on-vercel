// imports
const express = require("express")
const router = express.Router()

//Middleware
router.use(express.urlencoded({ extended: false }))
router.use(express.json())

//router.set('view engine', 'ejs')

router.get("/test", function (req, res) {
    res.status(200).send("works")
})

router.get("/", function (req, res) {
    res.status(200).render("home",)
    // console.log(__dirname)
    // res.sendFile('helloworld.html')
})

router.get("/css/styles.css", function (req, res) {
    res.status(200).sendFile('css/styles.css')
})

router.get("/about", function (req, res) {
    res.status(200).render("about",)
})

router.get("/contact", function (req, res) {
    res.status(200).render("contact",)
})

router.post("/", function (req, res) {
    const { num1, num2 } = req.body
    res.status(200).send("The sum of these numbers is " + num1 + num2)
})

module.exports = router;

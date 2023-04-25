"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
router.get("/test", function (req, res) {
    res.status(200).send("works");
});
router.get("/", function (req, res) {
    res.status(200).render("home");
});
router.get("/about", function (req, res) {
    res.status(200).render("about");
});
router.get("/contact", function (req, res) {
    res.status(200).render("contact");
});
router.post("/", function (req, res) {
    var _a = req.body, num1 = _a.num1, num2 = _a.num2;
    res.status(200).send("The sum of these numbers is " + num1 + num2);
});
module.exports = router;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// imports
var express_1 = require("express");
var router = (0, express_1.Router)();
// Define user routes
router.get("/test", function (req, res) {
    res.status(200).send("works");
});
router.get("/", function (req, res) {
    res.status(200).render("influencer/index");
});
router.post("/", function (req, res) {
    var _a = req.body, num1 = _a.num1, num2 = _a.num2;
    res.status(200).send("The sum of these numbers is " + num1 + num2);
});
router.get("/*", function (req, res) {
    res
        .status(200)
        .render("noize/404", {
        path: process.env.NOIZE_PATH,
        imgUrl: process.env.NOIZE_IMAGE_PATH,
    });
});
// Export the router
module.exports = router;

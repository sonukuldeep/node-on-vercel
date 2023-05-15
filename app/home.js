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
    res.status(200).render("home/index", { pageUrl: process.env.PAGE_URL });
});
// Export the router
module.exports = router;

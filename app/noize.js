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
    res.status(200).render("noize/index", { path: process.env.NOIZE_PATH, imgUrl: process.env.NOIZE_IMAGE_PATH });
});
router.get("/news", function (req, res) {
    res.status(200).render("noize/news", { path: process.env.NOIZE_PATH, imgUrl: process.env.NOIZE_IMAGE_PATH });
});
router.get("/contact-us", function (req, res) {
    res.status(200).render("noize/contact-us", { path: process.env.NOIZE_PATH, imgUrl: process.env.NOIZE_IMAGE_PATH });
});
// blogs
router.get("/news/analyzing-this-years-key-trends", function (req, res) {
    res.status(200).render("noize/news/analyzing-this-years-key-trends", { path: process.env.NOIZE_PATH, imgUrl: process.env.NOIZE_IMAGE_PATH });
});
router.get("/news/popular-styles-in-electronic-music", function (req, res) {
    res.status(200).render("noize/news/popular-styles-in-electronic-music", { path: process.env.NOIZE_PATH, imgUrl: process.env.NOIZE_IMAGE_PATH });
});
router.get("/news/dance-revolution-what-was-changed", function (req, res) {
    res.status(200).render("noize/news/dance-revolution-what-was-changed", { path: process.env.NOIZE_PATH, imgUrl: process.env.NOIZE_IMAGE_PATH });
});
router.get("/news/signs-that-rock-will-dominate", function (req, res) {
    res.status(200).render("noize/news/signs-that-rock-will-dominate", { path: process.env.NOIZE_PATH, imgUrl: process.env.NOIZE_IMAGE_PATH });
});
router.get("/news/edm-and-dance-festivals-in-europe", function (req, res) {
    res.status(200).render("noize/news/edm-and-dance-festivals-in-europe", { path: process.env.NOIZE_PATH, imgUrl: process.env.NOIZE_IMAGE_PATH });
});
router.get("/news/sounds-that-define-modern-music", function (req, res) {
    res.status(200).render("noize/news/sounds-that-define-modern-music", { path: process.env.NOIZE_PATH, imgUrl: process.env.NOIZE_IMAGE_PATH });
});
// 
router.post("/", function (req, res) {
    var _a = req.body, num1 = _a.num1, num2 = _a.num2;
    res.status(200).send("The sum of these numbers is " + num1 + num2);
});
router.get("/*", function (req, res) {
    res.status(200).render("noize/404", { path: process.env.NOIZE_PATH, imgUrl: process.env.NOIZE_IMAGE_PATH });
});
// Export the router
module.exports = router;

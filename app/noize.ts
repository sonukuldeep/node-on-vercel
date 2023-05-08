// imports
import { Request, Response, Router } from 'express';
const router = Router()

// Define user routes
router.get("/test", function (req: Request, res: Response) {
    res.status(200).send("works")
})

router.get("/", function (req: Request, res: Response) {
    res.status(200).render("noize/index", { path: process.env.NOIZE_PATH })
})

router.get("/news", function (req: Request, res: Response) {
    res.status(200).render("noize/news", { path: process.env.NOIZE_PATH })
})

router.get("/contact-us", function (req: Request, res: Response) {
    res.status(200).render("noize/contact-us", { path: process.env.NOIZE_PATH })
})

// blogs
router.get("/news/analyzing-this-years-key-trends", function (req: Request, res: Response) {
    res.status(200).render("noize/news/analyzing-this-years-key-trends", { path: process.env.NOIZE_PATH })
})

router.get("/news/popular-styles-in-electronic-music", function (req: Request, res: Response) {
    res.status(200).render("noize/news/popular-styles-in-electronic-music", { path: process.env.NOIZE_PATH })
})

router.get("/news/dance-revolution-what-was-changed", function (req: Request, res: Response) {
    res.status(200).render("noize/news/dance-revolution-what-was-changed", { path: process.env.NOIZE_PATH })
})

router.get("/news/signs-that-rock-will-dominate", function (req: Request, res: Response) {
    res.status(200).render("noize/news/signs-that-rock-will-dominate", { path: process.env.NOIZE_PATH })
})

router.get("/news/edm-and-dance-festivals-in-europe", function (req: Request, res: Response) {
    res.status(200).render("noize/news/edm-and-dance-festivals-in-europe", { path: process.env.NOIZE_PATH })
})

router.get("/news/sounds-that-define-modern-music", function (req: Request, res: Response) {
    res.status(200).render("noize/news/sounds-that-define-modern-music", { path: process.env.NOIZE_PATH })
})
// 


router.post("/", function (req: Request, res: Response) {
    const { num1, num2 } = req.body
    res.status(200).send("The sum of these numbers is " + num1 + num2)
})

router.get("/*", function (req: Request, res: Response) {
    res.status(200).render("noize/404", { path: process.env.NOIZE_PATH })
})

// Export the router
module.exports = router;

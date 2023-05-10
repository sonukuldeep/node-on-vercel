// imports
import { Request, Response, Router } from 'express';
const router = Router()

// Define user routes
router.get("/test", function (req: Request, res: Response) {
    res.status(200).send("works")
})

router.get("/", function (req: Request, res: Response) {
    res.status(200).render("home/index",)
})


// Export the router
module.exports = router;

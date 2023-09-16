// imports
import { Request, Response, Router } from "express";
const router = Router();

// Define user routes
router.get("/test", function (req: Request, res: Response) {
  res.status(200).send("works");
});

router.get("/", function (req: Request, res: Response) {
  res.status(200).render("influencer/index");
});

router.post("/", function (req: Request, res: Response) {
  const { num1, num2 } = req.body;
  res.status(200).send("The sum of these numbers is " + num1 + num2);
});

router.get("/*", function (req: Request, res: Response) {
  res
    .status(200)
    .render("noize/404", {
      path: process.env.NOIZE_PATH,
      imgUrl: process.env.NOIZE_IMAGE_PATH,
    });
});

// Export the router
module.exports = router;

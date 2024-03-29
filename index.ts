//Imports
require("dotenv").config();
import { Request, Response } from "express";
const express = require("express");
const app = express();
const path = require("path");
const rateLimit = require("express-rate-limit");

//fitness route
const home = require("./app/home");
const fitness = require("./app/fitness");
const noize = require("./app/noize");
const influencer = require("./app/influencer");
const dental = require("./app/dental");
const bloggy = require("./app/bloggy");

// database
const { createEntry } = require("./lib/prisma");

// use Input validation
const validate = require("./validation/validationMiddlewere");
const contactSchema = require("./validation/contactFormValidation");

// Creating a limiter by calling rateLimit function with options
const limiter = rateLimit({
  max: 500,
  windowMs: 60 * 60 * 1000,
  message: "Too many request from this IP",
});

//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(limiter);

// Set the view engine to EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Serve static files from a public folder
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", home);
app.use("/fitness", fitness);
app.use("/noize", noize);
app.use("/influencer", influencer);
app.use("/dental", dental);
app.use("/bloggy", bloggy);

app.post(
  "/createNewContact",
  validate(contactSchema),
  async (req: Request, res: Response) => {
    const { name, currentWeight, goalWeight, email, describeYourGoals } =
      req.body;
    createEntry(name, currentWeight, goalWeight, email, describeYourGoals);
    res.status(200).json("ok");
  }
);

// if port exist then run else deploy on vercel
if (process.env.PORT) {
  // Start the server
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
} else app.listen();

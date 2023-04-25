//Imports
require('dotenv').config();
var express = require("express");
var app = express();
var fitness = require('./app/fitness');
var path = require('path');
//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Set the view engine to EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// Serve static files from a public folder
app.use(express.static(path.join(__dirname, 'public')));
// Routes
app.use('/fitness', fitness);
// if port exist then run else deploy on vercel
if (process.env.PORT) {
    // Start the server
    app.listen(process.env.PORT, function () {
        console.log("Server is running on port ".concat(process.env.PORT));
    });
}
else
    app.listen();

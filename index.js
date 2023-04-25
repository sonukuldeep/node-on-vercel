"use strict";
require('dotenv').config();
var express = require("express");
var app = express();
var fitness = require('./app/firness');
var path = require('path');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', fitness);
if (process.env.PORT) {
    app.listen(process.env.PORT, function () {
        console.log("Server is running on port ".concat(process.env.PORT));
    });
}
else
    app.listen();

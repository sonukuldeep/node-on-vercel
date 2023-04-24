"use strict";
require('dotenv').config();
const express = require("express");
const app = express();
const routes = require('./app/routes');
var path = require('path');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);
if (process.env.PORT) {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
}
else
    app.listen();

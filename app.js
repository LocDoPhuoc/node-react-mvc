const express = require("express");
const app = express();

const path = require('path');

// Config public directory
app.use(express.static("public"));

// Serve the static files from the React app
console.log(__dirname);
app.use(express.static(path.join(__dirname, 'dist')));

// EJS
app.set("view engine", "ejs");
app.set("views", "views");

// Routes
app.get("/", (req, res) => {
    res.render("index", {data: "Some data"});
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.listen(3000, console.log("Server is running at: http://127.0.0.1:3000"));
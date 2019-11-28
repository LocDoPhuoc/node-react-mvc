const express = require("express");
const app = express();

const path = require('path');
const session = require("express-session");
const passport = require("passport");

// Passport config
require("./configs/passport")(passport);

// Config public directory
app.use(express.static("public"));

// Serve the static files from the React app
console.log(__dirname);
app.use(express.static(path.join(__dirname, 'dist')));

// EJS
app.set("view engine", "ejs");
app.set("views", "views");

// Body parser
app.use(express.urlencoded({ extended: false }));

// Express session
app.use(session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
}));

// Express middleware
app.use(passport.initialize());
app.use(passport.session());


// Routes
app.get("/", (req, res) => {
    res.render("index", {data: "Some data"});
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get('/login', (req, res) => {
    res.render('login');
});

const auth = require('./configs/auth');

app.get('/dashboard', auth, (req, res) => {
    res.render('dashboard');
});

app.post('/login', passport.authenticate('local', {
    successRedirect: "/dashboard",
    failureRedirect: "/login"
}));

app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

app.get('/api', auth, (req, res) => {
    res.send({
        id: 1,
        name: 'Loc'
    })
});

app.listen(3000, console.log("Server is running at: http://127.0.0.1:3000"));
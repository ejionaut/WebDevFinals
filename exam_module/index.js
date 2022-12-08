//import dependencies
const express = require("express")
const path = require("path")
const cors = require("cors")
const session = require("express-session")

// import routes
const authRoute = require("./routes/authRoute")
const examRoute = require("./routes/examRoute")

// express set-up
const app = express();
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "public")))
app.use(cors());
app.use(express.json());
app.use(session({
    secret: "The secret",
    name: "sessionID",
    resave: false,
    saveUninitialized: false
}))

// // disable caching to every route
// app.use(function(req, res, next) {
//     res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0')
//     next()
// })

// express routes
app.use(authRoute)
app.use(examRoute)

app.get("/", (req, res) => {
    if(req.session.loggedIn){
        res.redirect("/dashboard")
    } else {
        res.redirect("/login")
    }
})

app.listen(3001, '0.0.0.0', () => {
    console.log("Server is running on port 3001.")
})
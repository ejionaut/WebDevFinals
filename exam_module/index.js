//import dependencies
const express = require("express")
const path = require("path")
const cors = require("cors")

//import routes
const authRoute = require("./routes/authRoute")

//express set-up
const app = express();
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "public")))
app.use(cors());
app.use(express.json());

//express routes
app.use(authRoute)

app.get("/", (req, res) => {
    if(req.session){
        res.redirect("/dashboard")
    } else {
        res.redirect("/login")
    }
})

app.listen(3001, '0.0.0.0', () => {
    console.log("Server is running on port 3001.")
})
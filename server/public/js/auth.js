const db = require("./db")
const session = require("express-session")

const auth = ((req, res) => {
    const q = "SELECT * FROM users WHERE userID = ? && password = ?"

    db.query(q, [req.body.userid, req.body.password], (error, result) =>{
        if(error) throw error
        if(result.length){
            res.redirect("/dashboard")
        }else{
            res.render("login", {errMessage: "Incorrect user ID or password"})
        }
    })
})

const login = ((req, res)=> {
    res.render("login", {errMessage: ""})
})

const logout = ((req, res) => {

})

module.exports = {
    auth: auth,
    login: login,
    logout: logout
}
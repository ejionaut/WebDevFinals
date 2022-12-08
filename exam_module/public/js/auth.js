const db = require("./db")

const auth = ((req, res) => {
    if(req.session.loggedIn){
        res.redirect("/dashboard")
    }else{
        const q = "SELECT * FROM accounts WHERE user_id = ? AND password = ?"
    
        db.query(q, [req.body.userid, req.body.password], (error, result) => {
            if(error) throw error
            if(result.length){
                req.session.loggedIn = true
                console.log(req.session)
                res.redirect("/dashboard")
            }else{
                res.render("login", {errMessage: "Incorrect user ID or password"})
            }
        })
    }
})

const login = ((req, res)=> {
    if(req.session.loggedIn){
        res.redirect("/dashboard")
    }
    res.render("login", {errMessage: ""})
})

const logout = ((req, res) => {

})

module.exports = {
    auth: auth,
    login: login,
    logout: logout
}
const stud_dashboard = ((req, res) => {
    if(req.session.loggedIn){
        res.render("dashboard")
    }else{
        res.redirect("/login")
    }
    
})

module.exports = {
    stud_dashboard: stud_dashboard
}
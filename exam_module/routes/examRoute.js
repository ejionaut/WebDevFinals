const express = require("express")
const router = express.Router()

const { stud_dashboard } = require("../public/js/dashboard")

//routes for student
// router.post("/dashboard", stud_dashboard)
router.get("/dashboard", stud_dashboard)

module.exports = router
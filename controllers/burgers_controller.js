// Dependencies 
const express = require("express");
const burger = require("../models/burgers.js");
const router = express.Router();

// get routes
// takes to main page
router.get("*", function(req, res) {
    res.redirect("/burgers");
});
// gets all burger info for route and will put it on the handlebar index page
router.get("/burgers", function(req, res) {
    burger.all(function(burgerData) {

    res.render("index", {burger_data: burgerData});
})
});
// post the data back to the index page for creating new burgers
router.post("/burger/new", function(req,res) {
    burger.create(req.body.burgername, function(result) {
        console.log(result);
        res.redirect("/");
    })
})
module.exports = router;
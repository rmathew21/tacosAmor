const express = require('express');

const router = express.Router();
const taco = require("../models/taco");


router.get("/", function(req, res) {
    taco.all(function(tacoData){
        res.render("index", {taco_data: tacoData});
    });
});

router.post('/tacos/create', function(req, res) {
    taco.create(req.body.taco_name, function(result) {
        console.log(result);
        res.redirect("/");
    });
});

module.exports = router;
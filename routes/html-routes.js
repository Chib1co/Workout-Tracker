const express = require("express");
const path = require("path");

const appo = express()

module.exports = function(app) {
    app.get("/", (req,res) => {
        res.sendFile(path.join(_dirname, '../public/index.html'));
    });


    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(_dirname, '../public/exercise.html'));
    })

    app.get("/stats", (req, res) => {
        res.sendFile(path.join(_dirname, '../public/stats.html'));
    })

}

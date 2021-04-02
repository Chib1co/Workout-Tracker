//Routing correct pages

const express = require("express");
const path = require("path");
// const app = express();
const router = express.Router();

module.exports = function(app) {
    router.get("/", (req,res) => {
        res.sendFile(path.join(_dirname, '../public/index.html'));
    });


    router.get("/exercise", (req, res) => {
        res.sendFile(path.join(_dirname, '../public/exercise.html'));
    })

    router.get("/stats", (req, res) => {
        res.sendFile(path.join(_dirname, '../public/stats.html'));
    })

}

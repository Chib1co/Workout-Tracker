//load data
//Script to get user information from the database

const Workout = require("../models/workout.js");
const mongoose = require("mongoose");
const express = require("express");

// const app = express();
const router = express.Router();

router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then((results) => {
            res.json(results)
        })
        .catch(err => {
            res.status(400).json({
                errors: err,
            })
        })
})



router.post("/api/workouts", (req, res)=> {
    Workout.create(req.body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err)
    });
});

router.put("/api/workouts/:id", (req, res) => {
    // find the workout
    Workout.findByIdAndUpdate(req.params.id, {
        $push: {
            exercises: req.body,
        }
    })
    .then(dbWorkout => {
        res.json(dbWorkout);
        
    })
    // workout id === req.params.id

    // add exercise to workout

});
router.get("/api/workouts/range", (req, res) => {
    // get all the workouts
    // for each workout -- include a 'totalDuration' field
})


module.exports = router;
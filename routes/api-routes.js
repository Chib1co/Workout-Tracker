//load data
//Script to get user information from the database

const Workout = require("../models/workout.js");
const mongoose = require("mongoose");
const express = require("express");

// const app = express();
const router = express.Router();

router.get("/api/workouts", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration" }
            }
        }
    ])
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err)
        })
});

router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err)
        });
});

router.put("/api/workouts/:id", (req, res) => {
    // find the workout
    // add exercise to workout
    Workout.findByIdAndUpdate(req.params.id, {
        $push: {
            exercises: req.body,
        }
    })
        .then(dbWorkout => {
            res.json(dbWorkout);

        })
});

router.get("/api/workouts/range", (req, res) => {
    // get all the workouts
    // for each workout -- include a 'totalDuration' field
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration" }
            }
        },
        {
            $sort:{
                day: -1
            }
        },
        {$limit: 7}
    ])
        // .sort({day: -1})
        // .limit(7)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err)
        })
});


module.exports = router;
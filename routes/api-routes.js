//load data
//Script to get user information from the database

const Workout = require("../models/workout.js");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

app.post("/api/workouts", ({body}, res)=> {
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err)
    });
});

// app.put("/api/workouts/:id", ({body}, res) => {

// })
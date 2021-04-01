//database set up. Connecting database. Load models.
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },

    exercise: [
        {
            type: {
                type: String,
                required: "Type of exercise is required",
                allowNull: false,
            },
            name: {
                type: String,
                required:  "Name of exercise is required",
                allowNull: false,
            },
            duration: {
                type: Number,
                required: "Duration is required",
                allowNull: false
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            }
        }
    ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
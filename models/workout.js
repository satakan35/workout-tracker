const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
      },
    exercises: [
        {
    name: {
            type: String,
            trim: true,
            required: "Enter exercise name",
          },
    type: {
            type: String,
            trim: true,
            required: "Enter exercise type",
          },
    duration: {
            type: Number,
            required: "Enter exercise duration (mins)",
          },
    weight: {
            type: Number,
          },
    sets: {
            type: Number,
          },
    reps: {
            type: Number,
          },
    distance: {
            type: Number,
},
        }
    ]
 
  
});

const User = mongoose.model("Workout", workoutSchema);

module.exports = User;
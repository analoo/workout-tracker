const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const PORT = process.env.PORT || 3000;

const db = require(__dirname,"./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populate", { useNewUrlParser: true });

const WorkoutSchema = new Schema({
  type: String,
  name: String,
  distance: Number,
  duration: Number,
  weight: Number,
  sets: Number,
  reps: Number,
  date: Date,

});

const Workout = mongoose.model("Workout", WorkoutSchema);

Workout.create({ name: "Test" })
  .then(dbLibrary => {
    console.log(dbLibrary);
  })
  .catch(({ message }) => {
    console.log(message);
  });

app.get("/exercise"), (req,res) => {
  res.render("<h1> hellow there </h1>")
}

app.put("/api/workouts/:id", (res => {
  db.Workout.update({
    _id: mongojs.ObjectId(req.params.id)
  }, {
    $set: {
      type: req.body.type,
      name: req.body.name,
      distance: req.body.distance,
      duration: req.body.duration,
      weight: req.body.weight,
      sets: req.body.sets,
      reps: req.body.reps,
      date: Date.now()
    }
  }).then(result => {
    console.log(result)
    res.json(result)
  }).catch(err => {
    res.json(err)
  });
}));

// app.post("/submit", ({body}, res) => {
//   db.Book.create(body)
//     .then(({_id}) => db.Library.findOneAndUpdate({}, { $push: { books: _id } }, { new: true }))
//     .then(dbLibrary => {
//       res.json(dbLibrary);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.get("/books", (req, res) => {
//   db.Book.find({})
//     .then(dbBook => {
//       res.json(dbBook);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.get("/library", (req, res) => {
//   db.Library.find({})
//     .then(dbLibrary => {
//       res.json(dbLibrary);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.get("/populated", (req, res) => {
//   db.Library.find({})
//     .populate("books")
//     .then(dbLibrary => {
//       res.json(dbLibrary);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
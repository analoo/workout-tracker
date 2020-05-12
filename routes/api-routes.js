var db = require("../models");


module.exports = function (app) {

  app.get("/api/workouts", (req, res) => {

    db.Workout.find({}, {})
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  });




  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findOneAndUpdate(
      { _id: req.params.id }, 
      {$push: { exercises: req.body }} ,
      { new: true }
      ).then(result => {
        console.log(result)
        res.json(result)
      }).catch(err => {
        res.json(err)
      });
  });

  app.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        res.json(err);
      });
  })

  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  });

}
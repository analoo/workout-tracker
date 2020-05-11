var db = require("../models");

module.exports = function (app) {
  
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

}
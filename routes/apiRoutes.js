var db = require("../models");

module.exports = function(app) {
  app.get("/api/images", function(req, res) {
    db.Image.find({}).then(function(dbWorkout) {
      res.json(dbWorkout);
    });
  });

  app.post("/api/workout/:id", function(req, res) {
    db.Image.updateOne({ _id: req.params.id }, { rating: req.body.rating }).then(function(dbWorkout) {
      res.json(dbWorkout);
    });
  });
};
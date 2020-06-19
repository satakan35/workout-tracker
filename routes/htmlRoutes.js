var path = require("path");

module.exports = function(app) {
  app.get("exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });
};
  module.exports = function(app) {
    app.get("index", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/index.html"));

      module.exports = function(app) {
        app.get("stats", function(req, res) {
          res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
      };

    });
  };
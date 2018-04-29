var express = require("express");
var pg = require("pg");
var connectionString = "postgres://localhost:5432/TaskManager";

var router = express.Router();

router.post("/", function(req, res) {
  pg.connect(connectionString, function(err, client, done) {
    if (err) {
      console.log("posting task error", err);
    } else {
      var results = [];

      var task = req.body.todo;
      var status = req.body.completed;

      var query = client.query("INSERT INTO tasks (task, status) VALUES ($1, $2) " +
                              "RETURNING task, status;", [task, status]);

      query.on("row", function(row) {
        results.push(row);
      });

      query.on("end", function() {
        res.send(results);
        done();
      });

      query.on("error", function(err) {
        console.log("Error posting task and status", err);
        res.status(500).send(err);
        done();
      });
    }
  });
});

router.get("/", function(req, res) {
  pg.connect(connectionString, function(err, client, done) {
    if (err) {
      console.log("error retrieving from database", err);
      response.sendStatus(500);
    } else {
      var query = client.query("SELECT * FROM tasks;");
      var results = [];

      query.on("error", function(err){
        console.log("Error retrieving tasks", err);
        res.sendStatus(500);
        process.exit(1);
      });

      query.on("row", function(row) {
        results.push(row);
      });

      query.on("end", function() {
        console.log("Successfully retrieved tasks");
        res.send(results);
        done();
      });
    }
  });
});

router.delete("/:id", function(req, res) {
  pg.connect(connectionString, function(err, client, done) {
    if (err) {
      console.log("error deleting task", err);
    } else {
      var results = [];

      var requestedID = req.params.id;
      console.log("deleting task ID", requestedID);

      var query = client.query("DELETE FROM tasks WHERE id = " + requestedID + " RETURNING *;");

      query.on("error", function(err) {
        console.log("error deleting task", err);
        res.status(500).send(err);
        process.exit(1);
      });

      query.on("row", function(row) {
        results.push(row);
      });

      query.on("end", function() {
        console.log("Success in deleting task");
        res.send(results);
        done();
      });
    }
  });
});

router.put("/:id", function(req, res) {

  pg.connect(connectionString, function(err, client, done) {
    if (err) {
      console.log("error changing complete status", err);
    } else {
      var requestedID = req.params.id;
      var results = [];
      console.log("completing task", requestedID);

      var query = client.query("UPDATE tasks SET status = true " + "WHERE id = " + requestedID + " RETURNING *;");

      query.on("error", function(err) {
        console.log("Error changing status", err);
        res.status(500).send(err);
        process.exit(1);
      });

      query.on("row", function(row) {
        results.push(row);
      });

      query.on("end", function() {
        console.log("Successfully completed task");
        res.send(results);
        done();
      });
    }
  });
});

module.exports = router;

var pg = require("pg");

var connectionString = "postgres://localhost:5432/TaskManager";

function initializeDB() {
  pg.connect(connectionString, function(err, client, done) {
    if (err) {
      console.log("Error connection to DB", err);
      process.exit(1);
    } else {
      var query = client.query("CREATE TABLE IF NOT EXISTS tasks" +
      "(id SERIAL PRIMARY KEY," +
      "task_item varchar(300) NOT NULL," +
      "completed BOOLEAN NOT NULL" +
      ");"
    );

    query.on("end", function() {
      console.log("Schema creation success!");
      done();
    });

    query.on("error", function() {
      console.log("Schema creation unsuccessful");
      process.exit(1);
    });
    }
  });
}

module.exports.connectionString = connectionString;
module.exports.initializeDB = initializeDB;

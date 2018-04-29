var express = require("express");
var index = require("./routes/index");
var noun = require('./routes/noun');
var adjective = require('./routes/adj');

var app = express();

app.use("/", index);
app.use("/noun", noun);
app.use("/adj", adjective);

app.use(express.static('server/public'));


//**Server Listener**//

var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log("Listening on port", port);
});

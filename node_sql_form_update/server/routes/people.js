var router = require('express').Router();
var pg = require('pg');

var connectionString = require ('../db/connection').connectionString;

router.post('/', function(req, res){
  pg.connect(connectionString, function(err, client, done){
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      var result = [];
      var name = req.body.name;
      var address = req.body.address;
      var city=req.body.city;
      var state=req.body.state;
      var zip_code=req.body.zip_code;

      var query = client.query('INSERT INTO people (name, address, city, state, zip_code) VALUES ($1, $2, $3, $4, $5) ' +
                                'RETURNING id, name, address, city, state, zip_code', [name, address, city, state, zip_code]);

      query.on('row', function(row){
        result.push(row);
      });

      query.on('end', function() {
        done();
        res.send(result);
      });

      query.on('error', function(error) {
        console.error('Error running query:', error);
        done();
        res.status(500).send(error);
      });
    }
  });
});
router.get('/', function(request, response){
  pg.connect(connectionString, function(err, client, done){
    if (err) {
      console.log(err);
      response.sendStatus(500);
    }else{
      var query=client.query("SELECT * FROM people");
      var results=[];

      query.on("error", function(error){
        console.log(error);
        response.sendStatus(500);
        process.exit(1);
      });

      query.on("row", function(rowData){
        results.push(rowData);
      });

      query.on("end", function(){
        console.log("success story!");
        done();
        response.send(results);
      });
    }
  });
});


module.exports = router;

var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'news'
});

/* GET home page. */
router.post('/list', function(req, res, next) {
	var he=req.body.he;
	var na=req.body.na;
	var ti=req.body.ti;
	var con=req.body.con;
	var se=req.body.se;
  res.header("Access-Control-Allow-Origin","*")
  connection.query('INSERT INTO new(head,name,shijian,con,se) VALUES("'+he+'","'+na+'","'+ti+'","'+con+'","'+se+'")',function(err, rows, fields) {
	  	res.send(rows)
	  });
});

router.get('/detail', function(req, res, next) {
	res.header("Access-Control-Allow-Origin","*")
  connection.query('SELECT * FROM new',function(err, rows, fields) {
	  	res.send(rows)
	  });
});




module.exports = router;

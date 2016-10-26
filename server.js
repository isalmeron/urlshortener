var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
// var fs = require('fs');
// var file = "test.db";
// var exists = fs.existsSync(file);
// var sqlite3 = require('sqlite3').verbose();
// var db = new sqlite3.Database(file);

// db.serialize(function(){
// 	if(!exists){
// 		db.run("CREATE TABLE test (field1 TEXT)");
// 	}
// 	var stmt = db.prepare("INSERT INTO test VALUES(?)");
// 	stmt.run("IRVING");
// 	stmt.run("ES");
// 	stmt.run("UN");
// 	stmt.run("PILLO");	

// 	stmt.finalize();
// 	db.each("SELECT rowid As id, field1 FROM test", function(error,row){
// 		if(error){
// 			console.log("Error happened : " + error);
// 		}
// 		console.log(row.id + " : " + row.field1);
// 	});
// });
// db.close();

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules/materialize-css'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

app.get('/',function(req,res){
	res.sendfile('./public/index.html');
});

app.get('/inicio',function(req,res){
	res.sendfile('./public/index.html');
});

app.get('*', function(req,res){
	res.sendfile('./public/404Error.html');
});

app.listen(3333);
console.log('App listening on port 3333');
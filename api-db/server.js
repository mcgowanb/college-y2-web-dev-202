var express = require('express');
var path = require('path');
var mysql = require('mysql');
var app = express();
const cors = require('cors');

const corsOptions = {
    origin: "http://localhost:4200"
}

app.use(cors(corsOptions));

var connection = mysql.createConnection({
    host: 'college-angular-db.cucaivb9nhjv.eu-west-1.rds.amazonaws.com',
    user: 'root',
    password: 'password'
});

connection.connect(function (error) {
    if (!!error) {
        console.log('Error ' + error);
    }
    else
        console.log('Connected');
});

connection.query('USE api_test');
app.set('port', 3000);
app.set('view engine', 'jade');

var programmeName;

app.get('/', function (req, res) {
    connection.query('SELECT CourseName FROM Course WHERE id = 2',
        function (err, rows) {
            if (!!err)
                console.log("Error in the query");

            else{
                console.log('Successful Query');
                console.log(rows);
            }

            programmeName = rows[0]['CourseName'];
            console.log("programmeName " + programmeName);
            res.send(programmeName);
        })
});

app.listen(app.get('port'));
console.log('Express server listening on port ' + app.get('port'));
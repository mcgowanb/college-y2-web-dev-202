var express = require('express');
var path = require('path');
var mysql = require('mysql');
var app = express();
const cors = require('cors')

const corsOptions = {
    origin: 'http://localhost:4200'
}

app.use(cors(corsOptions))

var connection = mysql.createConnection({
    host: 'rds-test-2.c2exmftaihrq.eu-west-1.rds.amazonaws.com',
    user: 'root',
    password: 'password'
});

connection.connect(function (error) {
    if (!!error) {
        console.log('Error' + error);
    }
    else {
        console.log('Connected');
    }

})
connection.query('USE wp2_exam');
app.set('port', 3000);
app.set('view engine', 'jade');
var moduleName;

app.get('/', function (req, res) {
    connection.query('select module_name from module_info where module_id=1', function (err, rows) {
        if (!!err) {
            console.log('Error in the query');
        }
        else {
            console.log('Successful query');
            console.log(rows);
        }
        moduleName = rows[0]['module_name'];
        console.log("moduleName" + moduleName);
        res.send(moduleName);
    });

});

app.listen(app.get('port'));
console.log('Express server listening on port ' + app.get('port'));
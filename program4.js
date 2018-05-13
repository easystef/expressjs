var express = require('express');
var bodyparser = require('body-parser');

var app = express();

app.use(bodyparser.urlencoded({extended: false}));

app.post('/form', function(req, res) {
   var ans = req.body.str;
   ans = ans.split('').reverse().join('');
   res.send(ans);
});

app.listen(process.argv[2]);


var express = require('express')
var fs = require('fs');
var app = express()

app.get('/books', function (req, res) {
    fs.readFile(process.argv[3], function(err, data) {
        if (err) throw err;
        var x = JSON.parse(data);
        res.json(x);
    });
})

app.listen(process.argv[2]);
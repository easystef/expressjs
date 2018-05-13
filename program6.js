var express = require('express');
var crypto = require('crypto');

var app = express();

app.put('/message/:NAME', function(req, res) {
    var x = crypto.createHash('sha1')
        .update(new Date().toDateString() + req.params.NAME)
        .digest('hex');
    res.send(x);
});

app.listen(process.argv[2]);
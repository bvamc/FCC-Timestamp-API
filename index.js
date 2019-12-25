const express = require("express");
const timeStampMs = express();
let time = require("./time.js");
let port = Number(process.env.PORT || 8080);
timeStampMs.get('/:time', function (req, res) {
    var data = req.params;
    res.json(time(data.time));
});
timeStampMs.use('/', express.static(__dirname + '/public'));
timeStampMs.listen(port, function () {
    console.log('Server is online');
});
var express = require('express');
var app = express();
var apiRoutes = express.Router();

let googleTrends = require('../models/GoogleTrends');

apiRoutes.route('/google/interest_over_time').get(function (req, res) {
    let testing = googleTrends.interestOverTime(req.query.keyword, new Date(req.query.startTime),
        new Date(req.query.endTime), req.query.geo);
    testing.then(data => {
        res.send(data);
    });
});

module.exports = apiRoutes;
let express = require('express');
let app = express();
let apiRoutes = express.Router();
const util = require('util');
let googleTrends = require('../models/GoogleTrends');
let ooniApi = require('../models/OONIApi');

apiRoutes.route('/google/interest_over_time').get(function (req, res) {
    let data = googleTrends.interestOverTime(req.query.keyword, new Date(req.query.startTime),
        new Date(req.query.endTime), req.query.geo);
    data.then(data => {
        res.send(data);
    })
});

apiRoutes.route('/ooni/files').get(function (req, res) {
    let data = ooniApi.apiFiles(req.query.probe_cc, req.query.test_name, new Date(req.query.since).toDateString(),
        new Date(req.query.until).toDateString());
    data.then(data => {
        res.send(data);
    })
});

module.exports = apiRoutes;
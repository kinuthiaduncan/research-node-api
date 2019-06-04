const googleTrends = require('google-trends-api');

let interestOverTime = function (keyword, startTime, endTime, geo, req, res, next) {
    let data = {
        keyword: keyword,
        startTime: startTime,
        endTime: endTime,
        geo: geo
    };
    return googleTrends.interestOverTime(data)
        .then(response => {
            return response;
        }).catch(err => {
            return err;
        })
};

exports.interestOverTime = interestOverTime;
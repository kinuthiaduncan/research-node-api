const https = require('https');
const host = 'https://api.ooni.io';
let apiFiles = function (probe_cc, test_name, since, until) {
    return new Promise((resolve, reject) => {
        https.get(host + '/api/v1/files?probe_cc=' + probe_cc + '&test_name=' + test_name + '&since=' + since + '&until=' + until, function (res) {
            let rawData = '';
            res.on('data', (chunk) => {
                rawData += chunk;
            });
            res.on('end', () => {
                try {
                    const parsedData = JSON.parse(rawData);
                    resolve(parsedData);
                } catch (e) {
                    reject(e.message);
                }
            });
        }).on('error', (e) => {
            reject(e.message);
        })
    });
};

exports.apiFiles = apiFiles;
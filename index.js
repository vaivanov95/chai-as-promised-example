const request = require('superagent');

async function queryUrl(url) {
    return request
        .get(url)
}

module.exports = {
    queryUrl
};
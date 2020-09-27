const http = require('http');

const request = function(url) {
    return new Promise(resolve => {
        http.get({ path: url }, response => {
            let data = '';
            response.on('data', _data => (data += _data));
            response.on('end', () => resolve(data));
        });
    });
}

test('Checks if all 100 data have been received', () => {
    let url = "https://api.spacexdata.com/v3/launches?limit=100"
    return request(url).then(data => expect(data.length).toBe(100));
});
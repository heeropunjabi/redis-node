var redis = require('redis');
var client = redis.createClient(); //creates a new client

client.on('connect', function () {
    console.log('connected');
});

client.hmset('framework', {
    name: 'heero',
    surname: 'punjabi2'
});

client.hgetall('framework', function (err, reply) {
    console.log(reply);
});
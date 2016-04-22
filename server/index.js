var ip = require('ip');
var app = require('./app');
var services = require('./services');
var settings = require('../settings');

app.listen(settings.server.port);

console.log('Webserver at http://' + settings.server.ip + ':' + settings.server.port);

app.use('items', services['items']);

var items = app.service('items');

items.on('created', function(data) {
    console.log('created', data);
});
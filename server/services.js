
var _ = require('lodash');
var NeDB = require('nedb');
var service = require('feathers-nedb');

var services = {};

var tables = {
    items: {
        autoload: true,
        filename: './database/items.db'
    }
};

_.forEach(tables, function(options, name){
    services[name] = service({
        Model: new NeDB(options)
    });
});

module.exports = services;
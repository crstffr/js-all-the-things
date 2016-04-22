var angular = require('angular');
var controller = require('./app.ctrl');

module.exports = angular
    .module('app.module', [])
    .controller('AppController', controller);

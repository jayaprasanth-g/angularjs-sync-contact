
'use strict';

var app = angular.module('myApp', ['ngRoute', 'firebase','ui.utils']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'template/contactInfo.html',
            controller: 'contactController'
        }).otherwise({
            templateUrl: 'template/contactInfo.html',
            controller: 'contactController'
		});
});


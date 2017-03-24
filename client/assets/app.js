/**
 * Created by danielscott on 3/20/17.
 */
let app = angular.module('managerApp', ['ngRoute', 'ngCookies']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {templateUrl: 'login.html'})
        .when('/dashboard', {templateUrl: 'dashboard.html'})
        .when('/poll', {templateUrl: 'poll.html'})
        .when('/poll/:id', {templateUrl: 'vote.html'})
        .otherwise({redirectTo: '/'})

});

// Only use with ranges under 400 performance is greatly impacted after that

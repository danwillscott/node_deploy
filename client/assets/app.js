/**
 * Created by danielscott on 3/20/17.
 */
let app = angular.module('managerApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {templateUrl: 'dashboard.html'})
        .when('/products', {templateUrl: 'products.html'})
        .when('/orders', {templateUrl: 'orders.html'})
        .when('/customers', {templateUrl: 'customers.html'})
        .when('/settings', {templateUrl: 'settings.html'})
        .otherwise({redirectTo: '/'})

});

// Only use with ranges under 400 performance is greatly impacted after that
app.filter('range', function() {
    return function(input, total) {
        total = parseInt(total);

        for (let i=1; i<=total; i += 1) {
            input.push(i);
        }

        return input;
    };
});
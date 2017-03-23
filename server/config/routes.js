/**
 * Created by daniel scott on 3/19/17.
 */
console.log('Server: routes.js loaded');
let index = require('../controllers/index');
let orders = require('../controllers/orders');
let products = require('../controllers/products');
let customers = require('../controllers/customers');


module.exports = function(app){
    // Get All Products Orders And Customers
    app.get('/dashboard', function(req, res) {
        index.show(req, res);
    });
    // Get All Customers
    app.get('/customers', function(req, res) {
        customers.show(req, res);
    });
    // Create A New Customer
    app.post('/customers', function(req, res) {
        customers.create(req, res);
    });
    // Delete A Customer
    app.delete('/customers/:id', function(req, res) {
        customers.delete(req, res);
    });
    // Show All Products
    app.get('/products', function(req, res) {
        products.show(req, res);
    });
    // Create New Product
    app.post('/products', function(req, res) {
        products.create(req, res);
    });
    // Delete A Product
    app.delete('/products/:id', function(req, res) {
        products.delete(req, res);
    });
    // Show All Orders
    app.get('/orders', function(req, res) {
        orders.show(req, res);
    });
    // Create New Order
    app.post('/orders', function(req, res) {
        orders.create(req, res);
    });
    // Delete A Order
    app.delete('/orders/:id', function(req, res) {
        orders.delete(req, res);
    });

};
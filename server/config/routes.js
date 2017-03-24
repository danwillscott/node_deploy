/**
 * Created by daniel scott on 3/19/17.
 */
console.log('Server: routes.js loaded');

let users = require('../controllers/users');
let polls = require('../controllers/polls');
let index = require('../controllers/index');


module.exports = function(app){

    app.get('/dashboard', function (req, res) {
        index.show(req, res)
    });

    app.post('/users', function(req, res) {
        users.create(req, res);
    });

    // Routes For polls
    app.post('/poll', function (req, res) {
        polls.create(req, res);
    });

    app.get('/poll/:id', function (req, res) {
        polls.show(req, res);
    });

    app.put('/poll/:id', function (req, res) {
        polls.vote(req, res);
    });

    app.delete('/poll/:id', function(req, res) {
        polls.delete(req, res);
    });

};
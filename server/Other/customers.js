/**
 * Created by danielscott on 3/21/17.
 */

let mongoose = require('mongoose');
let Customer = mongoose.model('Customer');
console.log('Server: User controller');

module.exports = {
    show: function (req, res) {
        console.log('Server: Customer Controller Show Customer');
        Customer.find({}, function (err, customer) {
            if(err){
                res.json({result: err, error: true})
            } else {
                res.json({result: customer, error: false})
            }
        })
    },

    create: function(req,res){
        console.log('Server: Customer Controller Create Customer');
        console.log(req.body);
        Customer.create(req.body, function (err, result) {
            if(err){
                res.json({result: err, error: true})
            } else {
                res.json({result: result, error: false});
            }
        });
    },

    delete: function(req,res){
        console.log('Server: Customer Controller Delete Customer');
        Customer.remove({_id: req.params.id}, function (err) {
            if(err){
                console.log('Server: Error Deleting User');
                res.json({result: err, error: true});
            } else {
                console.log('Server: Customer Deleted');
                res.json({error: false})
            }
        });
    },
};

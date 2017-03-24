/**
 * Created by danielscott on 3/19/17.
 */
let mongoose = require('mongoose');
let User = mongoose.model('User');
console.log('Server: friends controller');
module.exports = {
    show: function (req, res) {
        console.log('Server: User Controller Show User');
        User.find({}, function (err, users) {
            if(err){
                res.json({result: err, error: true})
            } else {
                res.json({result: users, error: false})
            }
        })
    },

    create: function(req,res){
        let userName = req.body.name;
        User.findOne({name: userName}, function (err, result) {
            if(!result){
                User.create(req.body, function (err, result) {
                    if(err){
                        res.json({result: err, error: true, user:result})
                    } else {
                        res.json({result: result, error: false});
                    }
                });
            } else {
                res.json({result: result, error: false});
            }
        });
    },


    // Not Used
    delete: function(req,res){
        console.log('Server: Customer Controller Delete Customer');
        User.remove({_id: req.params.id}, function (err) {
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

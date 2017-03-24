/**
 * Created by danielscott on 3/24/17.
 */
let mongoose = require('mongoose');

let User = mongoose.model('User');
let Poll = mongoose.model('Poll');

console.log('Server: Polls controller');
module.exports = {
    show: function (req, res) {
        console.log('Server: Polls Controller Show Product');


        Poll.findOne({_id: req.params.id}).populate('user').exec(function (err, order) {
            if(err){
                res.json({result: err, error: true})
            } else {
                res.json({result: order, error: false})
            }
        })
    },

    create: function(req,res){
        console.log('Server: Poll Controller Create Poll');
        // let user = req.body.user;
        Poll.create(req.body, function (err, result) {
            if(err){
                res.json({result: err, error: true});
            } else {
                res.json({result: result, error: false})
            }
        });

    },

    vote: function (req, res) {
        console.log(req.body.vote);
        console.log(req.params);
        Poll.findOne({_id: req.params.id}).populate('user').exec(function (err, result) {


            if(req.body.vote === 1){
                if(!result.vote1){
                    result.vote1 = 1
                    result.save(function (err) {});
                } else {
                    result.vote1 += 1;
                    result.save(function (err) {});
                }

            }
            else if(req.body.vote === 2){
                if(!result.vote2){
                    result.vote2 = 1
                    result.save(function (err) {});
                } else {
                    result.vote2 += 1;
                    result.save(function (err) {});
                }
            }
            else if(req.body.vote === 3){
                if(!result.vote3){
                    result.vote3 = 1
                    result.save(function (err) {});
                } else {
                    result.vote3 += 1;
                    result.save(function (err) {});
                }
            }
            else if(req.body.vote === 4){
                if(!result.vote4){
                    result.vote4 = 1;
                    result.save(function (err) {});
                } else {
                    result.vote4 += 1;
                    result.save(function (err) {});
                }
            }

            res.json({result: result})
        });
    },


    delete: function(req,res){
        console.log('Server: Poll Controller Delete Poll');
        console.log(req.params);
        Poll.remove({_id: req.params.id}, function (err) {
            if(err){
                console.log('Server: Error Deleting Poll');
                res.json({error: true});
            } else {
                console.log('Server: Poll Deleted');
                res.json({error: false})
            }
        });
    },


};


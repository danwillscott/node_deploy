/**
 * Created by danielscott on 3/21/17.
 */
let mongoose = require('mongoose');

let User = mongoose.model('User');
let Poll = mongoose.model('Poll');

console.log('Server: Index controller');

module.exports = {
    show: function (req, res) {
        console.log('Server: dashboard active');
        Poll.find({}).populate('user').exec(function (err, result) {
            if(err){
                console.log('Cant get Polls and populate them')
            } else {
                res.json({result: result, error: false})
            }
        })
    }
};
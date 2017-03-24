/**
 * Created by danielscott on 3/21/17.
 */

let mongoose = require('mongoose');
let Product = mongoose.model('Product');
console.log('Server: Product controller');

module.exports = {
    show: function (req, res) {
        console.log('Server: Product Controller Show Product');
        Product.find({}, function (err, product) {
            if(err){
                res.json({result: err, error: true})
            } else {
                res.json({result: product, error: false})
            }
        })
    },

    create: function(req,res){
        console.log('Server: Product Controller Create Product');
        console.log(req.body);
        Product.create(req.body, function (err, result) {
            if(err){
                console.log(err)
                res.json({result: result, error: true})
            } else {
                res.json({result: result, error: false});
            }
        });
    },

    delete: function(req,res){
        console.log('Server: Product Controller Delete Product');
        Product.remove({_id: req.params.id}, function (err) {
            if(err){
                console.log('Server: Error Deleting Product');
                res.json({error: true});
            } else {
                console.log('Server: Product Deleted');
                res.json({error: false})
            }
        });
    },
};

/**
 * Created by danielscott on 3/21/17.
 */
let mongoose = require('mongoose');
let Product = mongoose.model('Product');
let Customer = mongoose.model('Customer');
let Order = mongoose.model('Order');

console.log('Server: Index controller');


module.exports = {
    show: function (req, res) {


        console.log('Server: index dashboard active');
        Product.find({}, function (pErr, product) {
            if(!pErr){
                Customer.find({}, function (cErr, customer) {
                    if(!cErr){
                        Order.find({}).populate('_customer').populate('_product').exec(function (oErr, order) {
                            if(!oErr){
                                res.json({product: product, order: order, customer: customer})
                            } else {
                                console.log('Warp Drive Failure Can Not Populate!!!!')
                            }
                        });
                    }
                })
            }
        })
    }
};
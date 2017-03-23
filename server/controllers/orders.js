/**
 * Created by danielscott on 3/21/17.
 */
let mongoose = require('mongoose');
let Order = mongoose.model('Order');
let Product = mongoose.model('Product');
console.log('Server: Order controller');
module.exports = {
    show: function (req, res) {
        console.log('Server: Product Controller Show Product');
        Order.find({}).populate('_product').populate('_customer').exec(function (err, order) {
            if(err){
                res.json({result: err, error: true})
            } else {
                res.json({result: order, error: false})
            }
        })
    },

    create: function(req,res){
        console.log('Server: Product Controller Create Product');
        let quantity = req.body.quantity;
        let product = req.body.product._id;
        let customer = req.body.customer._id;
        console.log(`quantity: ${quantity}`);
        console.log(`product: ${product}`);
        console.log(`customer: ${customer}`);

        Product.findOne({_id: product}, function (err, result) {
            result.quantity -= quantity;
            result.save(function (err) { if(err) console.log(err) });
            console.log(result);
            let order = new Order({});
            order.quantity = quantity;
            order._customer.push(customer);
            order._product.push(product) ;
            order.save(function (err) {
                if(err) {
                    console.log(err);
                } else {
                    console.log('order saved');
                    res.json({result: true})
                }
            });

        });




    },

    delete: function(req,res){
        console.log('Server: Product Controller Delete Product');
        Order.remove({_id: req.params.id}, function (err) {
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
/**
 * Created by danielscott on 3/21/17.
 */

console.log('Server: order model connected');

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let OrderSchema = new mongoose.Schema({
    _customer: [{type: Schema.Types.ObjectId, ref: 'Customer'}],
    _product: [{type: Schema.Types.ObjectId, ref: 'Product'}],
    quantity: Number
}, {
    timestamps: true
});

let Order = mongoose.model('Order', OrderSchema);

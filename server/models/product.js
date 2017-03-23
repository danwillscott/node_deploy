/**
 * Created by danielscott on 3/21/17.
 */
console.log('Server: Product model connected');
let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let ProductSchema = new mongoose.Schema({
    name: String,
    url: String,
    description: String,
    quantity: Number,
    order: {type: Schema.Types.ObjectId, ref: 'Order'}
}, {
    timestamps: true
});

let Product = mongoose.model('Product', ProductSchema);

// quantity
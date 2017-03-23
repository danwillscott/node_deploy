/**
 * Created by danielscott on 3/21/17.
 */
console.log('Server: Customer model connected');
let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let CustomerSchema = new mongoose.Schema({
    name: String,
    order: [{type: Schema.Types.ObjectId, ref: 'Order'}]
}, {
    timestamps: true
});

let Customer = mongoose.model('Customer', CustomerSchema);
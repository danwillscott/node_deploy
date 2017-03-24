/**
 * Created by danielscott on 3/21/17.
 */
console.log('Server: Customer model connected');
let mongoose = require('mongoose');


let Schema = mongoose.Schema;


let CustomerSchema = new mongoose.Schema({
    name: {type: String, required: ["Name Must Be Over 3 Chars long!"], minlength: [3, "Name Must Be Over 3 Chars long!"], unique: 'This Name Is Already Used', uniqueCaseInsensitive: 'This Name Is Already Used'},
    order: [{type: Schema.Types.ObjectId, ref: 'Order'}]
}, {
    timestamps: true
});

let Customer = mongoose.model('Customer', CustomerSchema);
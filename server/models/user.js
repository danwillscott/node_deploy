/**
 * Created by danielscott on 3/21/17.
 */
console.log('Server: User model connected');
let mongoose = require('mongoose');


let Schema = mongoose.Schema;


let UserSchema = new mongoose.Schema({
    name: {type: String, unique: 'This Name Is Already Used', uniqueCaseInsensitive: 'This Name Is Already Used'},
    polls: [{type: Schema.Types.ObjectId, ref: 'Order'}]
}, {
    timestamps: true
});

let User = mongoose.model('User', UserSchema);
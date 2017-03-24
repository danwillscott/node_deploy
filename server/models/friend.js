/**
 * Created by danielscott on 3/19/17.
 */

console.log('Server: Friend model connected');
let mongoose = require('mongoose');

let FriendSchema = new mongoose.Schema({
    name: {type: String, unique: true},
    lastName: String,
    dob: Date
}, {
    timestamps: true
    });

let Friend = mongoose.model('Friend', FriendSchema);
/**
 * Created by danielscott on 3/24/17.
 */
let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let PollSchema = new mongoose.Schema({
    question: {type: String, required: ["Poll Must Be Over 8 Chars long!"], minlength: [8, "Poll Must Be Over 8 Chars long!"]},
    option1: {type: String, required: ["Option Must Be Over 3 Chars long!"], minlength: [3, "Option Must Be Over 3 Chars long!"]},
    option2: {type: String, required: ["Option Must Be Over 3 Chars long!"], minlength: [3, "Option Must Be Over 3 Chars long!"]},
    option3: {type: String, required: ["Option Must Be Over 3 Chars long!"], minlength: [3, "Option Must Be Over 3 Chars long!"]},
    option4: {type: String, required: ["Option Must Be Over 3 Chars long!"], minlength: [3, "Option Must Be Over 3 Chars long!"]},
    vote1: {type: Number},
    vote2: {type: Number},
    vote3: {type: Number},
    vote4: {type: Number},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
}, {
    timestamps: true
});

let Poll = mongoose.model('Poll', PollSchema);
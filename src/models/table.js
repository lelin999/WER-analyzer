let mongoose = require('mongoose');
let Schema = mongoose.Schema;
// create mongoose schema for projects:
let TableSchema = new mongoose.Schema({
    _round: { type: Schema.Types.ObjectId, ref: 'Round' },  
    table: { type: Number, required: true },
    player1Name: { type: String, required: true},
    player1DCI: { type: Number, required: true },
    player1Points: { type: Number, required: true},
    player2Name: { type: String },
    player2DCI: { type: Number },
    player2Points: { type: Number },
    player2Bye: false,
    eventName: { type: String },
    company: { type: String }
}, { timestamps: true });
// use mongoose schema to set new mongoose model:
mongoose.model('Table', TableSchema);
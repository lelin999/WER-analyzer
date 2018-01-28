let mongoose = require('mongoose');
let Schema = mongoose.Schema;
// create mongoose schema for projects:
let RoundSchema = new mongoose.Schema({
    round: { type: Number, required: true },
    eventName: { type: String },
    company: { type: String },
    date: { type: Date },
    pairings: [{ type: Schema.Types.ObjectId, ref: 'Table' }]
}, { timestamps: true });
// use mongoose schema to set new mongoose model:
mongoose.model('Round', RoundSchema);


// with round #, event name, date, and an array of ids which is the pairings

// // Company: CFB/SCG/Eudo
// // Event: GP San Jose
// // Modern Win-A-Box: 3, GP San Jose Main Event.
// let roundData = {
//     p1: {
//         opp: p2,
//         tableNum: 1,
//         playerDCI: 11111111,
//         playerPoints: 0,
//         oppDCI: 22222222,
//         oppPoints: 0,
//         BYE: false
//     },
//     p2: {
//     },
//     p3: {},
//     p9: {
//         opp: '',
//         tableNum: '',
//         playerDCI: 99999999,
//         playerPoints: 0,
//         oppDCI: '',
//         oppPoints: '',
//         BYE: true
//     }
// }
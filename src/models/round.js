let mongoose = require('mongoose');
// create mongoose schema for projects:
let RoundSchema = new mongoose.Schema({
    round: { type: Number, required: true },
    player: { 
      //needs relational association
      opp: { type: String },
      table: { type: Number },
      DCI: { type: Number },

     },

}, { timestamps: true });
// use mongoose schema to set new mongoose model:
mongoose.model('Round', RoundSchema);

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
let mongoose = require('mongoose');
// create mongoose schema for projects:
let PlayerSchema = new mongoose.Schema({
    _user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    userName: { type: String },
    name: { type: String, required: true },
    description: { type: String },
    github: { type: String } 
}, { timestamps: true });
// use mongoose schema to set new mongoose model:
mongoose.model('Player', PlayerSchema);


// let playerObject = {
//     "One, Player": {
//         name: "One, Player",
//         dci: 11111111,
//         points: 0,
//         event: '',
//         FBID: '',
//         currMatchInfo: {
//             oppData,
//             tableData
//         }
//     },
//     "Two, Player": {}
// }
// let tableData = {
// }

// let db = {
//     CFB: {
//         events: {
//             "GP San Jose": {
//                 eventInfo: {},
//                 playerList: playerObject,
//                 roundData: [
//                     round1, round2, round3
//                 ]
//             }
//         }
//     },
//     SCG: {}
// }
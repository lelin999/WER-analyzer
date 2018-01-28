let mongoose = require('mongoose');
// create mongoose schema for projects:
let PlayerSchema = new mongoose.Schema({
    name: { type: String, required: true},
    DCI: { type: Number, required: true },
    facebookId: { type: String }
}, { timestamps: true });
// use mongoose schema to set new mongoose model:
mongoose.model('Player', PlayerSchema);

//collection 1 : all players

// let playerObject = {
//     "One, Player": {
//         name: "One, Player",
//         dci: 11111111,
//         points: 0,
//         event: '',
//         FBID: '',
//         currMatchInfo: { ?????????
//             oppData,
//             tableData
//         }
//     },
//     "Two, Player": {}
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
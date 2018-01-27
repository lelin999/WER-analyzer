const express = require('express');
const bodyParser = require('body-parser');
const mtgParser = require('mtg-tourney-parser');
const path = require('path');
const mongoose = require('mongoose');
const fs = require('fs');

const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

let dataRetrieved;

//separate data file
mtgParser(path.join(__dirname, 'docs/Round-1.pdf'), (err, data, round) => {
  if (err) console.error(err);
  dataRetrieved = data;
  console.log(round, 'round');
  // console.log('success!', data);
});

app.get('/', (req, res) => {
  // fs.readFile('index.html', 'utf8', function(err, contents) {
  //   res.write(contents);
  //   res.end();
  // }) 
  res.send(dataRetrieved);
}); 

app.listen(app.get('port'), () => {
  console.log('running on port', app.get('port'))
});

//account for names too long for pairings
//account for byes

//manually scrape off each line to find relevant information

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
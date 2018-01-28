const express = require('express');
const bodyParser = require('body-parser');
const mtgParser = require('mtg-tourney-parser');
const path = require('path');
const mongoose = require('mongoose');
const fs = require('fs');
// const dataRetrieved = require('./data.js')

const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//separate data file
let dataRetrieved;
mtgParser(path.join(__dirname, 'docs/Round-1.pdf'), (err, data, round) => {
  if (err) console.error(err);
  dataRetrieved = data;
  console.log(round, 'round');
  // console.log('success!', data);
});

//data acquired -> add to mongoose here

app.get('/', (req, res) => {
  // fs.readFile('index.html', 'utf8', function(err, contents) {
  //   res.write(contents);
  //   res.end();
  // }) 
  res.send(dataRetrieved);
}); 

require('./src/config/mongoose.js');
let routes_setter = require('./src/config/routes.js');
routes_setter(app);

app.listen(app.get('port'), () => {
  console.log('running on port', app.get('port'))
});

//spacing between name and DCI can account for bugs (1 incident round 1 pdf)

//account for names too long for pairings
//account for byes
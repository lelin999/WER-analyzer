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

let dataRetrieved;

//separate data file
mtgParser(path.join(__dirname, 'docs/Round-2.pdf'), (err, data, round) => {
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

//spacing between name and DCI can account for bugs

//account for names too long for pairings
//account for byes

//cannot gitignore this mtg module because of changes

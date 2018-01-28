// let data = require('./data.js');

let mongoose = require('mongoose');
let Player = mongoose.model('Player');
let Table = mongoose.model('Table');
let Round = mongoose.model('Round');

module.exports = (app) => {
// READ ALL
  app.get('/tables/all', function(req, res) {
    Table.find({}, (err, tables) => {
      if (err) {
        res.json(err);
      } else {
        res.json(tables);
      }
    })
  })

  app.get('/users', function(req, res) {
    users.allUsers(req, res);
  })

  app.get('/users/:id', function(req, res) {
    users.userAllProjects(req, res);
  })
}


// module.exports = {
//   allProjects: function(req, res){
//     Project.find({}, function(err, projects){
//       if(err){
//         res.json(err);
//       } else {
//         res.json(projects);
//       }
//     });
//   },

// }

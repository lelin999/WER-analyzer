// require all controllers:
let projects = require('../controllers/projects');
let users = require('../controllers/users');

module.exports = app => {
    // READ ALL
    app.get('/projects/all', function(req, res) {
        projects.allProjects(req, res);
    })

    app.get('/users', function(req, res) {
        users.allUsers(req, res);
    })

    app.get('/users/:id', function(req, res) {
        users.userAllProjects(req, res);
    })
}

// var mongoose = require('mongoose');
// // get mongoose model for projects:
// var Project = mongoose.model('Project');

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

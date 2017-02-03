var express = require('express');
//importing the burger.js file to use its database functions
var burgerFile = require ('../models/burger.js');
// creating the router for the app
var router = express.Router();


// create all our routes and set up logic within those routes where required.
router.get('/', function(req, res) {
  burgerFile.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});
// Post to create a burger...
// When the submit button on the input field named "burgername" in index.handlebars is pressed
// Will go to /create route
router.post('/create', function(req, res) {
  burgerFile.create([
    'burger_name'
  ], [
    req.body.burgername
  ], function() {
    res.redirect('/');
  });
});
// Route when burger is devoured
// Any burger can be inputted and a unique id will be assigned to it/its route
router.put('/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  console.log('condition', condition);

  burgerFile.update({
    'devoured': req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});

// exporting the express.Router
module.exports = router;
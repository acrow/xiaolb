var express = require('express');
var router = express.Router();

var User = require('../modules/user');
var Service = require('../modules/service');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('dataget');
});

// router.get('/user', function(req, res, next) {
// 	var util = require('util');
// 	console.log('a:'+ util.inspect(Activity));
// 	Activity.getAll(function(err, result) {
// 		if (err) {
// 			res.json(err);
// 		} else {
// 			res.json(result);		
// 		}
// 	});
	
// });

router.post('/user', function(req, res, next) {
	console.log(req.param('usr'));
	var usr = new User(req.param('usr'));
	usr.Save(function(err, result) {
		if (err) {
			res.json(err);
		} else {
			res.json('ok');
		}
	});
});

router.post('/login', function(req, res, next) {
	console.log(req.param('usr'));
	var usr = new User(req.param('usr'));
	User.Login(usr.name, usr.password, function(err, result) {
		if (err) {
			res.json(err);
		} else {
			res.json(result);
		}
	});
});

router.get('/service', function(req, res, next) {
	var id = req.param('id');
	if (id) {
		Service.Get(id, function(err, result) {
			if (err) {
				res.json(err);
			} else {
				res.json(result);
			}
		});
	} else {
		Service.All(function(err, result) {
			if (err) {
				res.json(err);
			} else {
				res.json(result);
			}
		});
	}
});

module.exports = router;

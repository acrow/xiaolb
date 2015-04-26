var db = require('./db');
function Service(svc) {
	this.name = svc.name;
	this.icon = svc.icon;
	this.key = svc.key;
	this.id = svc.id;
	this.desc = svc.desc;
	this.parent = svc.parent;
}
module.exports = Service;

Service.All = function All (callback) {
	var querySql = "SELECT * FROM t_service";
	db.Exec(
		querySql,
		function(err, result) {
			if (err) {
				console.log(err);
				callback(err);
			} else {
				callback(null, result);
			}
		}
	);
};

Service.Get = function Get (id, callback) {
	var querySql = "SELECT * FROM t_service where id=" + id;
	db.Exec(
		querySql,
		function(err, result) {
			if (err) {
				console.log(err);
				callback(err);
			} else {
				callback(null, result);
			}
		}
	);
};



var db = require('./db');
function User(usr) {
	this.name = usr.name;
	this.password = usr.password;
}
module.exports = User;

User.prototype.Save = function Save (callback) {
	var insertSql = "INSERT INTO t_user (name, password) values('" + this.name + "','" + this.password + "')";
	db.Exec(
		insertSql,
		function(err, result) {
			if (err) {
				console.log(err);
			} else {
				callback(err, result);
			}
		}
	);
}

User.Login = function Login (name,  password,  callback) {
	var querySql = "SELECT * FROM t_user WHERE name='" + name + "'";
	db.Exec(
		querySql,
		function(err, result) {
			if (err) {
				console.log(err);
				callback(err);
			} else {
				if (result[0].password===password) {
					callback(null, new User(result[0]));
				} else {
					callback("用户不存在或者密码不正确！",null);
				}
			}
		}
	);
}



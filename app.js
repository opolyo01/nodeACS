var sessionId,
	util = require('util'),
	qs = require('querystring');
	
ACS.init('my_oauth_key', 'my_oauth_secret');
logger.setLevel('DEBUG');

api.login = function(req, res, callback) {
	var query = req.query,
		email = query.email,
		password = query.password;
	ACS.Users.login({login: email, password: password}, loginCallback);
	function loginCallback(data) {
		var response = {status: "failure"};
		if(data.meta && data.meta.session_id){
			response = {status: "success"};
		}
		res.send(response);
	}
};

api.registerSubmit = function(req, res, callback) {
	var query = req.query,
		email = query.email,
		firstName = query.firstName,
		lastName = query.lastName,
		password = query.password,
		passwordConf = query.passwordConf;
		ACS.Users.create({
		    email: email,
			first_name: firstName,
			last_name: lastName,
		    password: password,
		    password_confirmation: passwordConf
		}, registerCallback);
	function registerCallback(e) {
		console.log(util.inspect(e));
		var response = {status: "failure"};
		if (e.success) {
			response = {status: "success"};
		}
		res.send(response);
	}
};

api.register = function(req, res){
	res.render('register', {
		message : 'Register',
		layout: false
	 });
};

api.index = function(req, res){
	res.render('index', {
		message : 'Login',
		layout: false
	 });
};

api.home = function(req, res){
	res.render('home', {
		message : 'Home',
		layout: false
	 });
};

api.createPlace = function(req, res) {
    ACS.Places.create({ 
        name: 'nameOfCity33', 
        city: 'Some City2332', 
        session_id: sessionId
    }, function(data) {
        res.text('New place created!');
    });
};
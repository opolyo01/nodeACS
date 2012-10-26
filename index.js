var sessionId;

ACS.init('mrkzNrohgOs6cqPx3QWglxoLpm7DuV4r', '1Tbd1X2iqxlhcJZgw9ZSV5e6lE9Vnouk');

logger.setLevel('DEBUG');

api.login = function(req, res, callback) {
    ACS.Users.login({
        login: 'test@mycompany.com', 
        password: 'test_password'
    }, loginCallback, req, res);
	function loginCallback(data) {
		logger.info('Logging in ACS app...');
		sessionId = data.meta.session_id;
		logger.info('Session ID '+sessionId);
		logger.info('Response is '+res);
		logger.info('callback is '+callback.toString());
	    //res.text('Login session is: ' + sessionId);
		callback(req, res);
	}
};

api.insertPlace = function(req, res){
	api.login(req, res, api.createPlace);
};



api.createPlace = function(req, res){
	logger.info('createPlace Response .. '+res);
	ACS.Places.create({
      	name:'Yahoo', 
      	city:'Sunnyvale',
	  	state: 'CA',
		//session_id: sessionId
    }, function(data) {
        res.write(JSON.stringify(data, null, 2));
        res.end();
    }, req, res);
};
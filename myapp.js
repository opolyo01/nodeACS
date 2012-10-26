ACS.init('mrkzNrohgOs6cqPx3QWglxoLpm7DuV4r', '1Tbd1X2iqxlhcJZgw9ZSV5e6lE9Vnouk');

logger.setLevel('DEBUG');

api.index = function(req, res){
	api.createPlace(req, res);
};

api.create = function(req, res) {
    logger.info('Logging in ACS app...');
    res.write('Logging in ACS app...\n');
  	
	ACS.Users.create({
	    email: 'test@mycompany.com',
	    first_name: 'test_firstname',
	    last_name: 'test_lastname',
	    password: 'test_password',
	    password_confirmation: 'test_password'
	}, function (e) {
	    if (e.success) {
	        var user = e.users[0];
	        logger.info('Success:\\n' +
	            'id: ' + user.id + '\\n' +
	            'first name: ' + user.first_name + '\\n' +
	            'last name: ' + user.last_name);
			res.end();
	    } else {
	        logger.info('Error:\\n' +
	            ((e.error && e.message) || JSON.stringify(e)));
	    }
	});
};

api.login = function(req, res){
	ACS.Users.login({
      login:'test@mycompany.com', 
      password:'test_password'
    }, function(response) {
        res.write(JSON.stringify(response, null, 2));
        res.write('\nACS logged in!\n');
        res.end();
        logger.info('ACS logged in!');
    }, req, res);
};

api.createPlace = function(req, res) {
    logger.info('Creating a new place...');
    res.write('Creating a new place...\n');
  
    ACS.Places.create({
      name:'Google', 
      city:'Mountain View',
	  state: 'CA'
    }, function(data) {
        res.write(JSON.stringify(data, null, 2));
        res.end();
    }, req, res);
};
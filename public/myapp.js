/**
 * service definition file
 */
// logger.setLevel('DEBUG');
// 
// api.index = function(req, res) {
// 	res.text('Index');
// };
// 
// api.edit = function(req, res) {
// 	res.text('Edit');
// };
// api.getJson = function(req, res) {
//     res.json({ success: true, message: "Hello, World!" });
// };

ACS.init('5c28c2cbk18dak4cd7kb1dck24ef436961ac', 'cec12b6cs73f0s4073sbd4as6002fe3ed65d');

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
      name:'appc_beijing', 
      city:'Beijing'
    }, function(data) {
        res.write(JSON.stringify(data, null, 2));
        res.write('\nAppcelerator Beijing office Created!!\n');
        res.end();
        logger.info('Appcelerator Beijing office Created!!');
    }, req, res);
};
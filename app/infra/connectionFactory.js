var mysql = require('mysql');

function createDbConnection() {
	if (!process.env.NODE_ENV) {
		return mysql.createConnection({
				host: '127.0.0.1',
				user: 'root',
				password: 't1c0',
				database: 'casadocodigo_nodejs'
		});
	}

	if (process.env.NODE_ENV == 'test') {
		return mysql.createConnection({
				host: '127.0.0.1',
				user: 'root',
				password: 't1c0',
				database: 'casadocodigo_nodejs_test'
		});
	}
		
}

//wrapper
module.exports = function() {
	return createDbConnection;
}
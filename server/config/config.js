if (!process.env.NODE_ENV) {
	process.env.NODE_ENV = 'dev'; // dev, prod, localhost
}
let config = require('./env/' + process.env.NODE_ENV + '.js');

module.exports = config;
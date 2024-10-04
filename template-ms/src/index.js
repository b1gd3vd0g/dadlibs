const secrets = require('./secrets');
const createServer = require('./server');

createServer(secrets.MODE === 'production');
const secrets = {};

require('dotenv').config({
    processEnv: secrets
});

module.exports = secrets;
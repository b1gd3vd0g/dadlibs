const secrets = {};

require('dotenv').config({
    processEnv: secrets
});

require('dotenv').config({
    processEnv: secrets,
    path: `.env.${secrets.MODE}`
});

console.log('LOGGING SECRETS');
console.log(secrets);

module.exports = secrets;
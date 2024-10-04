const secrets = require('../secrets');

/** Mongodb connection string */
const dbstr = ((dev) => {
    const un = encodeURI(secrets.MONGODB_UN);
    const pw = encodeURI(secrets.MONGODB_PW);
    const db = encodeURI(secrets.DATABASE);
    return encodeURI(
        secrets.MONGODB_CONNECTION_STRING
            .replace('{USERNAME}', un)
            .replace('{PASSWORD}', pw)
            .replace('{DATABASE}', db)
    );
})(secrets.MODE === "development");

const { createConnection } = require('mongoose');
/** Connection to the app's mongodb database. */
const connection = createConnection(dbstr);

const templateSchema = require('./schema');
/** The mongoose model representing a madlib template. */
const Template = connection.model('Template', templateSchema);

module.exports = Template;
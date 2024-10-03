const app = require('./app');

const createServer = (secure = false) => {
    let server, port;
    if (!secure) {
        port = 6900;
        server = require('http').createServer(app);
    } else {
        port = 6901;
        const { readFileSync } = require('fs');
        const options = {
            cert: readFileSync(process.env.SSL_CERT_PATH),
            key: readFileSync(process.env.SSL_KEY_PATH)
        };
        server = require('https').createServer(options, app);
    }
    // server and port have been set.
    // start listening.
    server.listen(port, () => {
        console.log(`${secure ? 'https' : 'http'} server listening on port ${port}.`);
    });
}

module.exports = createServer;
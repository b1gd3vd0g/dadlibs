const secrets = require('./secrets');

const router = require('express').Router();

router.get('/', async (req, res) => {
    return res.status(200).json({ message: secrets.MESSAGE });
})

module.exports = router;
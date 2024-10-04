const Template = require('./mongodb/model');
const secrets = require('./secrets');

const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const docs = await Template.find({});
        return res.status(200).json({ docs: docs });
    } catch (err) {
        return res.status(500).json({ err: err });
    }
})

router.post('/', async (req, res) => {
    try {
        const defaultdoc = new Template({
            template: 'You are a {noun}.',
            author: 'b1gd3vd0g',
            title: 'example'
        });
        const saveddoc = await defaultdoc.save();
        return res.status(200).json({ message: 'defaultdoc created', doc: saveddoc })
    } catch (err) {
        return res.status(500).json({ err: err });
    }
})

module.exports = router;
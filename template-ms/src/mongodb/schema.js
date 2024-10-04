const { Schema } = require('mongoose');

const templateSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true
        },
        template: {
            type: String,
            required: true,
            unique: true
        },
        upvotes: {
            type: Number,
            required: true,
            default: 0
        },
        downvotes: {
            type: Number,
            required: true,
            default: 0
        },
        tags: {
            type: [String],
            required: true,
            default: []
        },
        author: {
            type: String,
            required: true
        },
        created: {
            type: Date,
            required: true,
            default: () => new Date()
        }
    }, {
    collection: 'templates'
}
);

module.exports = templateSchema;
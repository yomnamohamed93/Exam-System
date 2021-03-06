/**
 * Course.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    schema: true,
    attributes: {
        name: {
            type: "string",
            required: true
        },
        chapters: {
            type: "integer",
            required: true
        },
        questions: {
            collection: 'question',
            via: 'course_id'
        }

    },


};
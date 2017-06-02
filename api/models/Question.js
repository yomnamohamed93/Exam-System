/**
 * Question.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    schema: true,
    attributes: {
        question_head: {
            type: "string",
            required: true
        },
        answers: {
            type: "array",
            required: true
        },
        correct_answer: {
            type: "integer",
            required: true
        },
        difficulty: {
            type: "string",
            required: true
        },
        objective: {
            type: "string",
            required: true
        },
        course: {
            model: 'course',
            required: true
        }

    }
};
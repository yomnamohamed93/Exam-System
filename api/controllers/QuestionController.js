/**
 * QuestionController
 *
 * @description :: Server-side logic for managing questions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    new: function(req, res, next) {
        Course.findOne(req.param('course_id'), function(err, course) {
            if (err) { return next(err); }
            if (!course) { return next('course not found'); }
            return res.view({ course: course });
        });
    },

    create: function(req, res) {
        Question.create(req.body).exec(function(err, result) {
            if (err) {
                req.session.errorMsg = { err };
                return res.redirect('/question/new');
            }
            // redirect must be called inside this callback, not outside
            //  return res.redirect('/question');
            res.json(result);
        });
    },

    find: function(req, res) {
        Question.find(function(err, questions) {
            if (err) { return res.serverError(err); }
            return res.view({ questions: questions });
        });
    },

    findOne: function(req, res, next) {
        Question.findOne(req.param('id'), function(err, question) {
            if (err) { return next(err); }
            if (!question) { return next('question not found'); }
            res.json(question);
            //return res.view({ question: question });
        });
    },

    destroy: function(req, res, next) {
        Question.destroy(req.param('id'), function(err, question) {
            if (err) { return next(err); }
            // redirect must be called inside this callback, not outside
            return res.redirect('/question');
        });
    },
    edit: function(req, res, next) {
        Question.findOne(req.param('id'), function(err, question) {
            if (err) { return next(err); }
            if (!question) { return next("question not found"); }
            return res.view({ question: question });
        });


    },
    update: function(req, res) {
        Question.update(req.param('id'), req.params.all(), function(err) {
            if (err) {
                req.session.errorMsg = { err };
                return res.redirect(`/question/edit/${req.param('id')}`);
            }
            return res.redirect('/question');
        });
    },
};
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
        course = Course.findOne(req.param('course_id'), function(err, course) {
            if (req.param('chapter') <= course.chapters) {
                Question.create(req.body).exec(function(err, result) {
                    if (err) {
                        req.session.errorMsg = { err };
                        return res.redirect(`/course/${req.param('course_id')}/question/new`);
                    }
                    //  return res.redirect('/question');
                    res.redirect(`/course/${req.param('course_id')}`);
                });
            } else {
                req.session.errorMsg = {};
                req.session.errorMsg.err = {
                    invalidAttributes: {
                        'error': [{
                            rule: 'error',
                            message: 'Incorrect number of chapters'
                        }]
                    }
                }
                return res.redirect(`/course/${req.param('course_id')}/question/new`);
            }
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
            // res.json(question);
            return res.view('question/findOne', { question: question, course_id: req.param('course_id') });
        });
    },

    destroy: function(req, res, next) {
        Question.destroy(req.param('id'), function(err, question) {
            if (err) { return next(err); }
            // redirect must be called inside this callback, not outside
            return res.redirect(`/course/${req.param('course_id')}/questions`);
        });
    },
    edit: function(req, res, next) {
        Question.findOne(req.param('id'), function(err, question) {
            if (err) { return next(err); }
            if (!question) { return next("question not found"); }
            return res.view({ question: question, course_id: req.param('course_id') });
        });


    },
    update: function(req, res) {
        course = Course.findOne(req.param('course_id'), function(err, course) {
            if (req.param('chapter') <= course.chapters) {
                Question.update(req.param('id'), req.params.all(), function(err) {
                    if (err) {
                        req.session.errorMsg = { err };
                        return res.redirect(`/course/${req.param('course_id')}/question/edit/${req.param('id')}`);
                    }
                    return res.redirect(`/course/${req.param('course_id')}/question/${req.param('id')}`);
                });
            } else {
                req.session.errorMsg = {};
                req.session.errorMsg.err = {
                    invalidAttributes: {
                        'error': [{
                            rule: 'error',
                            message: 'Incorrect number of chapters'
                        }]
                    }
                }
                return res.redirect(`/course/${req.param('course_id')}/question/edit/${req.param('id')}`);

            }
        });
    },
};
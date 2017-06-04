/**
 * CourseController
 *
 * @description :: Server-side logic for managing courses
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    new: function(req, res) {
        res.view();
    },

    create: function(req, res) {
        Course.create(req.body).exec(function(err, result) {
            if (err) {
                req.session.errorMsg = { err };
                return res.redirect('/course/new');
            }
            // redirect must be called inside this callback, not outside
            return res.redirect('/course');
        });
    },

    find: function(req, res) {
        Course.find(function(err, courses) {
            if (err) { return res.serverError(err); }
            return res.view({ courses: courses });
        });
    },

    findOne: function(req, res, next) {
        // Course.findOne(req.param('id'), function(err, course, next) {
        Course.findOne(req.param('id')).populateAll().exec(function(err, course) {
            if (err) { return next(err); }
            if (!course) { return next('course not found'); }
            //return res.view({ course: course });
            res.json(course);
        });
    },

    destroy: function(req, res, next) {
        Course.destroy(req.param('id'), function(err, course) {
            if (err) { return next(err); }
            // redirect must be called inside this callback, not outside
            return res.redirect('/course');
        });
    },
    edit: function(req, res, next) {
        Course.findOne(req.param('id'), function(err, course) {
            if (err) { return next(err); }
            if (!course) { return next("course not found"); }
            return res.view({ course: course });
        });


    },
    update: function(req, res) {
        Course.update(req.param('id'), req.params.all(), function(err) {
            if (err) {
                req.session.errorMsg = { err };
                return res.redirect(`/course/edit/${req.param('id')}`);
            }
            return res.redirect('/course');
        });
    },
};
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
                //Handle Error
            }
            return res.redirect('/course')
        });
    },

    find: function(req, res) {
        Course.find(function(err, courses) {
            if (err) { return res.serverError(err); }
            return res.view({ courses: courses });
        });
    },

    findOne: function(req, res) {
        sails.log(req.method, req.param('id'));
        Course.findOne(req.param('id'), function(err, course) {
            if (err) { return next(err); }
            if (!course) { return next("course not found"); }
            return res.view({ course: course });
        });
    },

    destroy: function(req, res) {
        // Course.findOne(req.param('id'), function(err, course) {
        //     if (err) { return next(err); }
        //     if (!course) { return next("course not found"); }
        // });
        sails.log(req.method, req.param('id'));
        Course.destroy(req.param('id'), function(err, course) {
            if (err) { return next(err); }
        });
        return res.redirect('/course')

    },
    edit: function(req, res) {
        Course.findOne(req.param('id'), function(err, course) {
            if (err) { return next(err); }
            if (!course) { return next("course not found"); }
            return res.view({ course: course });
        });


    },
    update: function(req, res) {
        Course.update(req.param('id'), req.params.all(), function(err) {
            if (err) { return next(err); }
        });
        return res.redirect('/course')

    },
};
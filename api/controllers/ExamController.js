module.exports = {

    new: function(req, res) {
        Course.findOne(req.param('course_id')).exec(function(err, course) {
            if (err) { return next(err); }
            if (!course) { return next('course not found'); }
            return res.view('exam/new', { course: course });
        });

    },
    create: function(req, res) {
        res.json(req.allParams());
    },
    selectCourse: function(req, res) {
        Course.find(function(err, courses) {
            if (err) { return res.serverError(err); }
            return res.view('exam/selectCourse', { courses: courses });
        });
    },
};
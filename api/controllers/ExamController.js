module.exports = {

    new: function(req, res) {
        Course.findOne(req.param('course_id')).exec(function(err, course) {
            if (err) { return next(err); }
            if (!course) { return next('course not found'); }
            return res.view('exam/new', { course: course });
        });

    },
    create: function(req, res) {
        params = req.allParams();
        ExamService.create(params)
            .then(function(exam) {
                // res.json(exam)
                return res.view('exam/show', { exam: exam });
            })
            .catch(function(err) { res.serverError(err) });
        // res.json(params);
    },

    selectCourse: function(req, res) {
        Course.find(function(err, courses) {
            if (err) { return res.serverError(err); }
            return res.view('exam/selectCourse', { courses: courses });
        });
    },
    show: function(req, res) {

    }
};
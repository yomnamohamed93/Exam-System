/**
 * CourseController
 *
 * @description :: Server-side logic for managing admin
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    login: function(req, res) {
        if (req.param('admin') == 'admin' && req.param('password') == 'admin') {
            req.session.admin = { loggedIn: true };
            return res.redirect('/course');
        }
        req.session.errorMsg = {};
        req.session.errorMsg.err = {
            invalidAttributes: {
                'Login Error': [{
                    rule: 'credential',
                    message: 'Incorrect Credentials'
                }]
            }
        }
        return res.view('static/login');
    },
    logout: function(req, res) {
        delete req.session.admin;
        res.redirect('/');
    }
};
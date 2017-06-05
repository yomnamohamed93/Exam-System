module.exports = function(req, res, next) {
    console.log('Applying adminAuth policy');
    console.log(JSON.stringify(req.allParams()));
    // res.locals.admin = {};
    console.log('Applied adminAuth policy');
    if (req.session.admin) {
        res.locals.admin = _.clone(req.session.admin);
        return next();
    } else {

        res.view('static/login');
    }


};
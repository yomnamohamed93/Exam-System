module.exports = function(req, res, next) {
    res.locals.errorMsg = {};
    if (req.session.errorMsg) {
        console.log('inside policy');
        res.locals.errorMsg = _.clone(req.session.errorMsg);
        req.session.errorMsg = {};
    }
    return next();

};
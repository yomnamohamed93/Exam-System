module.exports = function(req, res, next) {
    console.log('Applying errorMsg policy');
    console.log(JSON.stringify(req.allParams()));

    res.locals.errorMsg = {};
    if (req.session.errorMsg) {
        res.locals.errorMsg = _.clone(req.session.errorMsg);
        req.session.errorMsg = {};
    }
    console.log('Applied errorMsg policy');

    return next();

};
/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

    /***************************************************************************
     *                                                                          *
     * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
     * etc. depending on your default view engine) your home page.              *
     *                                                                          *
     * (Alternatively, remove this and add an `index.html` file in your         *
     * `assets` directory)                                                      *
     *                                                                          *
     ***************************************************************************/

    '/': {
        view: 'static/index'
    },

    /****************
     * Course Routes *
     * **************/
    'get /course/new': 'CourseController.new',
    'post /course': 'CourseController.create',
    'get /course': 'CourseController.find',
    'get /course/:id': 'CourseController.findOne',
    'get /course/edit/:id': 'CourseController.edit',
    'put /course/:id': 'CourseController.update',
    'delete /course/:id': 'CourseController.destroy',
    'get /course/:course_id/questions': 'CourseController.populate',

    /******************
     * Question Routes *
     * ****************/

    // QuestionControllerfind: CourseController.populate used instead,
    // accessible via /course/:course_id/questions
    'get /course/:course_id/question/new': 'QuestionController.new',
    'post /course/:course_id/question': 'QuestionController.create',
    'get /course/:course_id/question/:id': 'QuestionController.findOne',
    'get /course/:course_id/question/edit/:id': 'QuestionController.edit',
    'put /course/:course_id/question/:id': 'QuestionController.update',
    'delete /course/:course_id/question/:id': 'QuestionController.destroy',
    // QuestionController.populate, .add, .remove: Not Available, not child associations

    /***************************************************************************
     *                                                                          *
     * Custom routes here...                                                    *
     *                                                                          *
     * If a request to a URL doesn't match any of the custom routes above, it   *
     * is matched against Sails route blueprints. See `config/blueprints.js`    *
     * for configuration options and examples.                                  *
     *                                                                          *
     ***************************************************************************/

};
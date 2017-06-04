$(document).ready(function() {

    // Validate
    // http://bassistance.de/jquery-plugins/jquery-plugin-validation/
    // http://docs.jquery.com/Plugins/Validation/
    // http://docs.jquery.com/Plugins/Validation/validate#toptions

    // Add letters and spaces validation
    $.validator.addMethod("lettersonly", function(value, element) {
        return this.optional(element) || /^[a-z\s]*$/i.test(value);
    }, 'Please enter only letters');

    // Validate course create and edit form
    $('#course-form').validate({
        rules: {
            name: {
                required: true,
                lettersonly: true,
            },
            chapters: {
                required: true,
                number: true,
                min: 1,
            }
        },
        success: function(element) {
            element.text('OK!');
        }
    });

});
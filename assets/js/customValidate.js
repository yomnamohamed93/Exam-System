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
    $('#question-form').validate({
        rules: {
            'question_head': {
                required: true,
            },
            'answers[0]': {
                required: true,
            },
            'answers[1]': {
                required: true,
            },
            'answers[2]': {
                required: true,
            },
            'correct_answer': {
                required: true,
            },
            'difficulty': {
                required: true,
            },
            'objective': {
                required: true,
            },
        },
        success: function(element) {
            element.text('OK!');
        }
    });
});
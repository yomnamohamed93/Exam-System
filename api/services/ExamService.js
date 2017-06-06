module.exports = {
    create: function(params) {
        return new Promise(
            function(resolve, reject) {
                let examNotFinished = true;
                Question.find({ course_id: params.course_id }, function(err, questions) {
                    let exam;
                    while (examNotFinished) {
                        index = random(questions.length - 1);
                        let question = questions[index];
                        if (chapterLimitNotReached(params.Q_chapter, question.chapter, exam)) {
                            exam.push(question);
                            questions.splice(questions.indexOf(question), 1);
                        }
                        //check if the exam is ready
                    }
                    // resolve(questions);
                });
            });

    }
}

function random(max) {
    return Math.floor(Math.random() * max);
}

function chapterLimitNotReached(limit, chapter, questions) {
    let matchedQuestions = questions.filter(function(question) {
        return question.chapter == chapter;
    });
    return matchedQuestions.length < limit;
}
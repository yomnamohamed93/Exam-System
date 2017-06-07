module.exports = {
    create: function(params) {
        return new Promise(
            function(resolve, reject) {
                let examNotFinished = true;
                Question.find({ course_id: params.course_id }, function(err, questions) {
                    let exam = [],
                        l = questions.length;
                    console.log(questions.length);
                    for (let question = {}, i = 0; i < l; i++) {
                        index = random(questions.length);
                        question = questions[index];
                        console.log(params.Q_chapter, question);
                        if (chapterLimitNotReached(params.Q_chapter, question.chapter, exam)) {
                            exam.push(question);
                        }
                        questions.splice(questions.indexOf(question), 1);

                    } //for
                    // check if the exam is ready
                    let total_ques = params.Q_chapter * params.No_chapters;
                    if (exam.length == total_ques) { resolve(exam); }
                    reject("err");
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
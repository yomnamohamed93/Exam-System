module.exports = {
    create: function(params) {
        return new Promise(
            function(resolve, reject) {
                let examNotFinished = true;
                Question.find({ course_id: params.course_id }, function(err, questions) {
                    let exam = [],
                        questionPoolLength = questions.length;
                    console.log(questionPoolLength);
                    for (let question = {}, i = 0; i < questionPoolLength; i++) {
                        index = random(questions.length);
                        question = questions[index];
                        // if (chapterLimitNotReached(params.Q_chapter, question.chapter, exam)) {
                        //     exam.push(question);
                        // }
                        // if (difficultyLevelLimitNotReached(params[question.difficulty], question.difficulty, exam)) {
                        //     console.log('difficulty', params[question.difficulty]);
                        //     exam.push(question);
                        // }
                        // if (objectiveLimitNotReached(params[question.objective], question.objective, exam)) {
                        //     console.log('obj', params[question.objective]);
                        //     exam.push(question);
                        // }

                        if (chapterLimitNotReached(params.Q_chapter, question.chapter, exam) &&
                            difficultyLevelLimitNotReached(params[question.difficulty], question.difficulty, exam) &&
                            objectiveLimitNotReached(params[question.objective], question.objective, exam)) {
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

function difficultyLevelLimitNotReached(limit, difficultyLevel, questions) {
    let matchedQuestions = questions.filter(function(question) {
        return question.difficulty == difficultyLevel;
    });
    return matchedQuestions.length < limit;
}

function objectiveLimitNotReached(limit, objective, questions) {
    let matchedQuestions = questions.filter(function(question) {
        return question.objective == objective;
    });
    return matchedQuestions.length < limit;
}
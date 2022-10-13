import db from "@/_data/database.json";

export const findQuizByID = (id) => {
  const { quizes } = db;
  const parsedIntID = parseInt(id);
  return quizes.find((quiz) => quiz.id === parsedIntID);
};

export const findQuizQuestionByID = (quiz, id) => {
  const { questions } = quiz;
  return questions.find((question) => question.id === id);
};

export const getScoreResults = (quiz, answers) => {
  let sum = 0;
  for (let index = 0; index < quiz.questions?.length; index++) {
    const question = quiz.questions[index];
    if (answers[question.id] === question.answer) {
      sum++;
    }
  }

  return sum;
};

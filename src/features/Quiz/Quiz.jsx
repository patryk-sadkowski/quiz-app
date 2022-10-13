import "./Quiz.scss";
import { useEffect, useState } from "react";
import { CHANGE_QUESTION_METHODS } from "../../consts/ChangeQuestion";
import {
  findQuizByID,
  findQuizQuestionByID,
} from "../../pages/QuizPage/utils/quizUtils";
import { Question } from "./components/Question/Question";
import { Score } from "./components/Score/Score";

export const Quiz = ({ id }) => {
  const [quiz, setQuiz] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [isLastQuestion, setIsLastQuestion] = useState(false);
  const [displayScore, setDisplayScore] = useState(false);
  const [answers, setAnswers] = useState({});

  const displayResult = () => setDisplayScore(true);

  const setAnswerHandler = (id, answer) => {
    setAnswers((ans) => {
      ans[id] = answer;
      return { ...ans };
    });
  };

  const changeQuestion = (direction) => {
    let currentQuestionID = currentQuestion?.id;
    let question;

    if (currentQuestionID) {
      switch (direction) {
        case CHANGE_QUESTION_METHODS.NEXT:
          question = findQuizQuestionByID(quiz, ++currentQuestionID);
          if (question) {
            setCurrentQuestion(question);
          }
          break;
        case CHANGE_QUESTION_METHODS.PREV:
          question = findQuizQuestionByID(quiz, --currentQuestionID);
          if (question) {
            setCurrentQuestion(question);
          }
          break;
        default:
          break;
      }
      setIsLastQuestion(currentQuestionID == quiz.questions?.length);
    }
  };

  const nextQuestion = () => changeQuestion(CHANGE_QUESTION_METHODS.NEXT);
  const prevQuestion = () => changeQuestion(CHANGE_QUESTION_METHODS.PREV);

  useEffect(() => {
    if (id) {
      const quiz = findQuizByID(id);
      if (quiz) {
        setQuiz(quiz);
        if (quiz.questions?.length && currentQuestion === null) {
          setCurrentQuestion(quiz.questions[0]);
          let anserws = {};
          for (let n = 0; n < quiz.questions?.length; n++) {
            const question = quiz.questions[n];
            anserws[question.id] = null;
          }
          setAnswers(anserws);
        }
      }
    }
  });

  return (
    <div className="quiz">
      {!displayScore && (
        <div className="question-display">
          <div className="quiz__question-index">
            Pytanie: {currentQuestion?.id} / {quiz.questions?.length}
          </div>
          <Question
            setAnswer={setAnswerHandler}
            question={currentQuestion}
            answers={answers}
          />
          <div className="quiz__controls">
            <button onClick={prevQuestion}>Prev Question</button>
            {isLastQuestion ? (
              <button onClick={displayResult}>Results</button>
            ) : (
              <button onClick={nextQuestion}>Next Question</button>
            )}
          </div>
        </div>
      )}

      {displayScore && <Score answers={answers} quiz={quiz} />}
    </div>
  );
};

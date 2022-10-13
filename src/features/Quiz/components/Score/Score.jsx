import "./Score.scss";
import { useEffect, useState } from "react";
import { getScoreResults } from "../../../../pages/QuizPage/utils/quizUtils";

export const Score = ({ answers, quiz }) => {
  const [score, setScore] = useState(0);
  useEffect(() => {
    setScore(getScoreResults(quiz, answers));
  });
  return (
    <div className="score">
      <h1 className="score__title">
        Odpowiedziałeś na {score} z {quiz.questions?.length} pytań
      </h1>
    </div>
  );
};

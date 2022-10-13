import "./Question.scss";
import uniqid from "uniqid";

export const Question = ({ question, answers, setAnswer }) => {
  return (
    <div className="question">
      <div className="question__text">{question?.question}</div>
      <div className="question__answers">
        {question?.answers.map((answer, index) => (
          <div
            key={uniqid()}
            onClick={() => setAnswer(question.id, index)}
            className={`answer 
            ${answers[question?.id] == index ? "answer--selected" : ""}
            `}
          >
            {answer}
          </div>
        ))}
      </div>
    </div>
  );
};

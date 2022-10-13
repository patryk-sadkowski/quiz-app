import "./QuizPage.scss";
import { DefaultTemplate } from "../../templates/DefaultTemplate/DefaultTemplate";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Quiz } from "../../features/Quiz/Quiz";
import { Container } from "../../components/Container/Container";

export const QuizPage = () => {
  let { quizID } = useParams();
  return (
    <DefaultTemplate>
      <Container>
        <main className="page quiz-page">
          <Quiz id={quizID} />
        </main>
      </Container>
    </DefaultTemplate>
  );
};

import { useState } from "react";
import { QuizPage } from "../../pages/QuizPage/QuizPage";
import { DefaultTemplate } from "../../templates/DefaultTemplate/DefaultTemplate";

function App() {
  const [count, setCount] = useState(0);

  return (
    <DefaultTemplate>
      <div className="page home-page">
        dsa
      </div>
    </DefaultTemplate>
  );
}

export default App;

import { useEffect, useState } from "react";
import { quiz } from "../utils/constants";
import { useNavigate } from "react-router";

const ResultPage = () => {
  const [result, setResult] = useState([]);
  const navigate = useNavigate();

  // get quiz results from user's choices
  const getResult = () => {
    const storedChoices = localStorage.getItem("selected_choices");
    const userChoices = storedChoices ? JSON.parse(storedChoices) : [];
    const quizData = quiz.map((que, i) => {
      return { ...que, usersAns: userChoices[i] }; // Subtract 1 because IDs start at 1
    });
    return quizData;
  };

  // Set quiz results after component mounts
  useEffect(() => {
    setResult(getResult());
  }, []);

  // Calculate the user's score
  const score = result.filter(
    (question) => question.correctAnswer === question.usersAns
  ).length;

  return (
    <div className="result-page">
      <div className="result-container">
        <p>Score: {score}</p>
        {result.length > 0 &&
          result.map((que, i) => {
            return (
              <div key={i} className="que">
                <h2>Q. {que?.question}</h2>
                <p
                  className={
                    que?.correctAnswer === que?.usersAns ? "green" : "red"
                  }
                >
                  Your answer: {que?.usersAns}
                </p>
              </div>
            );
          })}
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Try again
        </button>
      </div>
    </div>
  );
};
export default ResultPage;

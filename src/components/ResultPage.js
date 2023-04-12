import { useEffect, useState } from "react";
import { quiz } from "../utils/constants";
import { useNavigate } from "react-router";

const ResultPage = () => {
  const [result, setResult] = useState([]);
  const navigate = useNavigate();

  const getResult = () => {
    const selectedChoices = JSON.parse(
      localStorage.getItem("selected_choices")
    );
    const resultArray = quiz.map((que, i) => {
      return { ...que, usersAns: selectedChoices[i] };
    });
    return resultArray;
  };
  useEffect(() => {
    setResult(getResult());
  }, []);

  return (
    <div className="result-page">
      <div className="result-container">
        <p>
          Score:
          {" " +
            result.filter((que) => que?.correctAnswer === que?.usersAns).length}
        </p>
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

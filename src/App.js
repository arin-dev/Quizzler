import React, { useEffect, useState, useCallback } from "react";
import Question from "./components/Question";
import CategorySelector from "./components/CategorySelector";
import ResultModal from "./components/ResultModal";
import Scoreboard from "./components/Scoreboard";
import "./App.css";

export default function App() {
  const [question, setQues] = useState(null);
  const [status, setStatus] = useState(null);
  const [category, setCategory] = useState("any");
  const [score, setScore] = useState({
    correct: 0,
    wrong: 0
  });

  useEffect(() => {
    getQuestion();
    console.log("Category: ", category);
  }, [category]);

  function handleSelectedOption(answer) {
    console.log("Answer:", answer);
    console.log("Correct :", question.correct_answer);
    const state = answer === question.correct_answer ? "win" : "lose";
    console.log("State:", state);
    setStatus(state);
  }

  function handleScore() {
    if (status === "win") {
      score.correct = score.correct + 1;
      setScore({ ...score });
    } else {
      score.wrong = score.wrong + 1;
      setScore({ ...score });
    }
  }

  function getAnotherQues(e) {
    setStatus(null);
    handleScore();
    getQuestion();
  }

  function skipQues() {
    getQuestion();
  }

  function getQuestion(e) {
    let apiLink = "https://opentdb.com/api.php?amount=1&difficulty=easy"; //&type=multiple
    if (category != "any") apiLink += `&category=${category}`;

    fetch(apiLink)
      .then((res) => res.json())
      .then((data) => {
        setQues(data.results[0]);
      });
  }

  return (
    <div className="app">
      {/* show the result modal ----------------------- */}
      {status && (
        <ResultModal
          status={status}
          correct_ans={question.correct_answer}
          task={getAnotherQues}
        />
      )}
      {status}
      <br />
      {/* question header ----------------------- */}
      <div className="question-header">
        <CategorySelector category={category} setCategory={setCategory} />
        <Scoreboard wrong={score.wrong} correct={score.correct} />
      </div>
      {/* the question itself ----------------------- */}
      <div className="question-main">
        {question && (
          <Question
            question={question}
            handleSelectedOption={handleSelectedOption}
          />
        )}
      </div>
      {/* question footer ----------------------- */}
      <div className="question-footer">
        <button onClick={skipQues}>Go to next question 👉</button>
      </div>
    </div>
  );
}

import React from "react";

export default function Question({ question, handleSelectedOption }) {
  var answers = [...question.incorrect_answers, question.correct_answer];
  // console.log(answers);
  console.log(question.correct_answer);
  answers = answers.sort(() => 0.5 - Math.random());
  // console.log(answers);
  return (
    <div className="question">
      <h2 dangerouslySetInnerHTML={{ __html: question.question }} />
      {answers.map((answer, index) => (
        <button
          onClick={(e) => handleSelectedOption(answer)}
          // value={answer}
          key={index}
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      ))}
    </div>
  );
}

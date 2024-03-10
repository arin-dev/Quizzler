import React from "react";

export default function ResultModal({ status, correct_ans, task }) {
  console.log(status);
  return (
    status && (
      <div className="result-modal">
        <div className="overlay" />
        <div className="result-modal-content">
          {status === "win" ? (
            <h3>
              👊👊👊
              <br />
              YOU WON!
            </h3>
          ) : (
            <div>
              <h3>
                😟😢😟
                <br />
                YOU LOST!
              </h3>
              <div className="correct-answer">
                <small>The correct answer was:</small>
                <br />
                <strong>{correct_ans}</strong>
              </div>
            </div>
          )}
          <button onClick={task}>Go to the next question 👉</button>
        </div>
      </div>
    )
  );
}

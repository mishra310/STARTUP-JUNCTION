import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Question = ({ title, subtitle, answer,subtitlee, answerr,subtitleee, answerrr }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleClick = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="container question">
      <div className="question-title">
        <h4 class="title-ans">{title}</h4>
        <button className="question-icons" onClick={handleClick}>
          {showAnswer ? (
            <AiOutlineMinus color="red" />
          ) : (
            <AiOutlinePlus color="#1f93ff" />
          )}
        </button>
      </div>
      <div className="question-subtitle">
      {showAnswer && <p className="ans">{subtitle}</p>}
      </div>
      <div className="question-answer">
        {showAnswer && <p className="pa">{answer}</p>}
      </div>
      <div className="question-subtitlee">
      {showAnswer && <p className="ans">{subtitlee}</p>}
      </div>
      <div className="question-answerr">
        {showAnswer && <p className="pa">{answerr}</p>}
      </div>
      <div className="question-subtitleee">
      {showAnswer && <p className="ans">{subtitleee}</p>}
      </div>
      <div className="question-answerrr">
        {showAnswer && <p className="pa">{answerrr}</p>}
      </div>
    </div>
  );
};

export default Question;
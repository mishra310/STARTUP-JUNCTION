import React, { useEffect } from "react";
import { questions } from "./data.js";
import Question from "./Question";
import { MdOutlineLibraryBooks } from "react-icons/md";


const Faq = () => {
  useEffect(() => {
   
  }, []);
  return (
    <section id="faq">
      <div className="container faq">
      <h1 class="title-anss">FAQs |</h1>
        <div className="u-title" data-aos="fade-up">
          
          <p className="pa">
            We Love to answer your Frequently Asked Questions!
          </p>
        </div>
        <div className="questions">
          {questions.map((question) => (
            <Question
              key={question.id}
              title={question.title}
              subtitle={question.subtitle}
              answer={question.answer}
              subtitlee={question.subtitlee}
              answerr={question.answerr}
              subtitleee={question.subtitleee}
              answerrr={question.answerrr}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
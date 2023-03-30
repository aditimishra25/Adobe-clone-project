import React from "react";
import questions from "./../../faq.json";
import FAQS from '../../containers/faqs/FAQS';

// export function FAQ() {
//   return (
  const FAQ = ({ question, answer }) => (
    <FAQS>
      <FAQS.Header>FAQ</FAQS.Header>
      {questions.map((question) => (
        <FAQS.Entity key={question.id}>
          <FAQS.Question>{question.question}</FAQS.Question>
          <FAQS.Text>{question.answer}</FAQS.Text>
        </FAQS.Entity>
      ))}
    </FAQS>
  );

// const Feature = ({ title, text }) => (
//   <div className="gpt3__features-container__feature">
//     <div className="gpt3__features-container__feature-title">
//       <div />
//       <h1>{title}</h1>
//     </div>
//     <div className="gpt3__features-container_feature-text">
//       <p>{title}</p>
//       <p>{text}</p>
//     </div>
//   </div>
// );

export default FAQ;
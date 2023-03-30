import React from "react";
import questions from "./../../faq.json";
import FAQS from '../../containers/faqs/FAQS';

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

export default FAQ;
import React, { useState } from "react";
import { Container, Header, Entity, Inner, Question, Text } from "./Styles.js";
import toogleUp from '../../assets/toggle_up_icon.png';
import toggleDown from '../../assets/toggle_down_icon.png';

const QuestionContext = React.createContext();
export default function FAQS({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}
FAQS.Header = function FAQSHeader({ children, ...restProps }) {
  return <Header {...restProps}> {children}</Header>;
};
FAQS.Entity = function FAQSEntity({ children, ...restProps }) {
  const [open, setOpen] = useState(false);
  return (
    <QuestionContext.Provider value={{ open, setOpen }}>
      <Entity {...restProps}> {children}</Entity>
    </QuestionContext.Provider>
  );
};
FAQS.Question = function FAQSHeader({ children, ...restProps }) {
  const { open, setOpen } = React.useContext(QuestionContext);

  return (
    <Question onClick={() => setOpen((open) => !open)} {...restProps}>
      {children}
      {open ? <h3><img className="toggle" src={toggleDown} /></h3> : <h3><img className="toggle" src={toogleUp} /></h3>}
    </Question>
  );
};
FAQS.Text = function FAQSText({ children, ...restProps }) {
  const { open } = React.useContext(QuestionContext);
  return open ? <Text {...restProps}>{children}</Text> : null;
};
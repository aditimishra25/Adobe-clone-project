import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: '02th October 2014',
    text: 'Level 1 exam',
  },
  {
    title: 'Nov-Dec 2016',
    text: 'Level 2',
  },
  {
    title: 'Ongoing this year',
    text: 'Level 3 (Grad)',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading border-right">
      <h1>Upcoming <br></br>Examinations</h1>
      <p>Enquire about the examination & <br></br>register for the exams.</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
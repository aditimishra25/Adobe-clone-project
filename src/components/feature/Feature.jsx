import React from 'react';
import './feature.css';
import calender from '../../assets/calender_icon.png';

const Feature = ({ title, text }) => (
  <div className="gpt3__features-container__feature">
    <div className="gpt3__features-container_feature-text">
      <p className="title-name">
        <img className="calender-icon" src={calender} />
        <p className="title-text">{title}</p>
      </p>
      <p className="text-name">{text}</p>
    </div>
  </div>
);

export default Feature;
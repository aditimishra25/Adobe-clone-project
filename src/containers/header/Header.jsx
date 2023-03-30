import React from 'react';
import people from '../../assets/logo_man_running.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Lorem ipsum</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed corrupti, molestiae enim, ipsam quod aspernatur delectus at quisquam quasi nihil, culpa eaque! Maxime, eligendi quaerat laborum quod perferendis id recusandae!</p>

      <div className="gpt3__header-content__input">
       <button type="button">Know More
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-caret-right-fill rigth-caret" viewBox="0 0 16 16">
          <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
          </svg>
        </button>
      </div>
    </div>
    <div className="gpt3__header-content__people">
        <img className="logo-man" src={people} />
    </div>
  </div>
);

export default Header;
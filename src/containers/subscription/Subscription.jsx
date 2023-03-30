import React from 'react';
import './subscription.css';
import mobile from '../../assets/mobile_icon.png';


const Subscription = () => (
  <div className="gpt3__header_sub section__padding" id="home">
    <div className="gpt3__header-content_sub">
      <h1 className="gradient__text">Subscribe</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed corrupti, molestiae enim, ipsam quod aspernatur delectus</p>

      <div className="gpt3__header-content__input_sub">
        <input type="email" placeholder="Enter your Email Address" />
        <button type="button">Subscribe Now
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-caret-right-fill rigth-caret" viewBox="0 0 16 16">
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
          </svg>
        </button>
      </div>
    </div>
    <div class="image">
      <img src={mobile} />
    </div>
  </div>
);

export default Subscription;
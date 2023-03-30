  import React, { useState } from 'react';
  import caretDown from '../../assets/icons8-arrow-24.png';
  import './navbar.css';

  const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">LOGO</a></p>  
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>
          <a href="#wgpt3">Qualifications 
            <img class="caret-down" src={caretDown} />
          </a>
        </p>
        <p>
          <a href="#possibility">Organizations
            <img class="caret-down" src={caretDown} />
          </a>
        </p>
        <p>
          <a href="#features">Research & Analysis 
            <img class="caret-down" src={caretDown} />
          </a>
        </p>
        <p>
          <a href="#blog">Lorem ipsum 
            <img class="caret-down" src={caretDown} />
          </a>
        </p>
        <p>
          <a href="#blog">Lorem ipsum 
            <img class="caret-down" src={caretDown} />
          </a>
        </p>
        <p>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </p>
        <button type="button">Enrolment</button>
      </div>
    </div>
  );
  };

  export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import image1 from './images/img_1.jpg';
import image2 from './images/img_2.jpg';
import image3 from './images/img_3.jpg';
import './css/HomePage.css';

const HomePage = () => {
  const handleLinkClick = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <header className="header">
        <nav>
          <h1>There is logo</h1>
          <ul>
            <li>
              <a href="/" onClick={handleLinkClick}>Home</a>
            </li>
            <li>
              <a href="/" onClick={handleLinkClick}>About Us</a>
            </li>
            <li>
              <a href="/" onClick={handleLinkClick}>Contact</a>
            </li>
            <li>
              <a href="/" onClick={handleLinkClick}>News</a>
            </li>
            <li>
              <a href="/" onClick={handleLinkClick}>Services</a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="image-container">
        <Link to="/detail" className="image-wrapper">
          <img src={image1} alt="Image 1" />
        </Link>
        <Link to="/detail2" className="image-wrapper">
          <img src={image2} alt="Image 2" />
        </Link>
        <Link to="/detail3" className="image-wrapper">
          <img src={image3} alt="Image 3" />
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

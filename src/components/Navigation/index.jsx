import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

class Navigation extends React.Component {
  render() {
    return (
      <nav className="Navigation">
        <div className="header__bottom">
          <div className="menu-item">
            <Link to="/catalog/cat" className="menu-link">
              <img src="image/cat-icon.png" alt="cat" />
              <span className="menu-text" className="menu-text">
                кошки
              </span>
            </Link>
          </div>
          <div className="menu-item">
            <Link to="/catalog/dog" className="menu-link">
              <img src="image/dog-icon.png" alt="dog" />
              <span className="menu-text">собаки</span>
            </Link>
          </div>
          <div className="menu-item">
            <Link to="/catalog/mouse" className="menu-link">
              <img src="image/mouse-icon.png" alt="mouse" />
              <span className="menu-text">грызуны</span>
            </Link>
          </div>
          <div className="menu-item">
            <Link to="/catalog/fish" className="menu-link">
              <img src="image/fish-icon.png" alt="fish" />
              <span className="menu-text">рыбы</span>
            </Link>
          </div>
          <div className="menu-item">
            <Link to="/catalog/chicken" className="menu-link">
              <img src="image/chicken-icon.png" alt="bird" />
              <span className="menu-text">птицы</span>
            </Link>
          </div>
          <div className="menu-item">
            <Link to="/catalog/pig" className="menu-link">
              <img src="image/pig-icon.png" alt="farm_animal" />
              <span className="menu-text">сельхоз животные</span>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;

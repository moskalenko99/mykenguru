import React from "react";
import _ from "lodash";
import Navigation from "./../Navigation";
import { Link } from "react-router-dom";
import { CartContext } from "./../../Cart";

import "./styles.scss";

const data = {
  telephone: "+7 (4872) 71-71-71",
  country: "г. Тула, ул. Пузакова, 44"
};

class Header extends React.Component {
  state = {
    query: '',
    data: null
  };

  handleChange = (e) => {
    console.log(e.currentTarget.value, e.target.value);
    this.setState({ query: e.currentTarget.value }, () => {
      fetch(`https://google.com/q=${this.state.query}`)
        .then(response => response.json())
        .then(data => {
          this.setState({ data });
        });
    });
  };

  render() {
    return (
      <CartContext.Consumer>
        {({ list }) => (
          <header>
            <div className="header">
              <div className="header__top">
                <div className="logo">
                  <Link to="/">
                    <img src="image/logo-final-1.png" alt="logo" />
                  </Link>
                </div>
                <div className="contacts">
                  <div className="contacts-numder">
                    <a href="#" className="number">
                      <img src="image/phone-icon.png" alt="phone" />
                      {data.telephone}
                    </a>
                  </div>
                  <div className="contacts-address">
                    <a href="#" className="address">
                      <img src="image/location-icon.png" alt="location" />
                      {data.country}
                    </a>
                  </div>
                </div>
                <div className="header__search">
                  <input
                    type="text"
                    placeholder="Поиск по товарам"
                    value={this.state.query}
                    onChange={this.handleChange}
                  />
                  <div className="search">
                    <img
                      className="search-icon"
                      src="image/search-icon.png"
                      alt="search"
                    />
                    <a href="#">Найти</a>
                  </div>
                </div>
                <Link className="private__cabinet" to="/cabinet">
                  <div class="header__private__cabinet">
                    <div class="user">
                      <img
                        class="user__icon"
                        src="image/user-icon.png"
                        alt="user"
                      />
                    </div>
                    <div class="private">
                      <a class="private__cabinet">Личный кабинет</a>
                    </div>
                  </div>
                </Link>
                <Link className="cart" to="/cart">
                  <div className="header__cart">
                    <div className="cart">
                      <img
                        className="cart__icon"
                        src="image/cart-icon.png"
                        alt="cart"
                      />
                      {_.size(list) > 0 ? (
                        <span className="cart__count">{_.size(list)}</span>
                      ) : null}
                    </div>
                    <div className="cart">
                      <a className="cart__link">Корзина</a>
                    </div>
                  </div>
                </Link>
              </div>
              <Navigation />
            </div>
          </header>
        )}
      </CartContext.Consumer>
    );
  }
}

export default Header;

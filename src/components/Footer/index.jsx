import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

const data = {
  telephone: "+7 (4872) 71-71-71",
  country: "г. Тула, ул. Пузакова, 44",
  email: "shop@mykengu.ru"
};

const cat = {
  foodCat: "Корм для кошек",
  toysCats: "Игрушки для кошек",
  vitaminsCats: "Витамины для кошек",
  clawsCats: "Когтеточки для кошек",
  carryCats: "Переноски для кошек"
};

const dog = {
  foodDog: "Корм для собак",
  toysDog: "Игрушки для собак",
  vitaminsDog: "Витамины для собак",
  bonesAndGoodies: "Кости и лакомства",
  collarsLeashesHarnesses: "Ошейники, поводки и шлейки"
};

const animals = {
  rodents: "Грызуны",
  fish: "Рыбы",
  birds: "Птицы",
  farmAnimal: "Сельхоз животное"
};

const about = {
  company: "О компании",
  contacts: "Контакты",
  delivery: "Доставка"
};
const userInfo = {
  payment: "Оплата",
  cabinet: "Личный кабинет",
  stock: "Акции"
};

class Footer extends React.Component {
  state = {
    data: data,
    cat: cat,
    dog: dog,
    animals: animals,
    about: about
  };

  render() {
    const { data, cat, dog } = this.state;
    return (
      <footer>
        <div className="container d-flex align-items-center footer">
          <div className="footer__nav__contact">
            <div className="footer__image">
              <img src="image/logo-final-2.png" alt="logo-final" />
            </div>
            <div className="footer__link">
              <img src="image/phone-icon-footer.png" alt="phone-footer" />
              <a href="#"> {data.telephone}</a>
            </div>
            <div className="footer__link">
              <img src="image/location-icon-footer.png" alt="location-footer" />
              <a href="#"> {data.country}</a>
            </div>
            <div className="footer__link">
              <img src="image/mail-icon.png" alt="mail" />
              <a href="#"> {data.email}</a>
            </div>
          </div>
          <div className="footer__nav">
            <Link to="catalog/cat">
              <div className="footer__title">кошки</div>
            </Link>
            {_.map(cat, (item, index) => (
              <div className="footer__link">
                <Link to={index}>{item}</Link>
              </div>
            ))}
          </div>
          <div className="footer__nav">
            <Link to="catalog/dog">
              <div className="footer__title">собаки</div>
            </Link>
            {_.map(dog, (item, index) => (
              <div className="footer__link">
                <Link to={index}>{item}</Link>
              </div>
            ))}
          </div>
          <div className="footer__nav footer__other">
            <Link to="catalog/other">
              <div className="footer__title">другое</div>
            </Link>
            {_.map(animals, (item, index) => (
              <div className="footer__link">
                <Link to={index}>{item}</Link>
              </div>
            ))}
          </div>
          <div className="footer__nav footer__score">
            <Link to="/">
              <div className="footer__title">магазин</div>
            </Link>
            {_.map(about, (item, index) => (
              <div className="footer__link">
                <Link to={index}>{item}</Link>
              </div>
            ))}
          </div>

          <div className="footer__nav">
            {_.map(userInfo, (item, index) => (
              <div className="footer__link">
                <Link to={index}>{item}</Link>
              </div>
            ))}
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

import React from "react";
import { withRouter } from "react-router-dom";
import _ from "lodash";
import Radio from "./../Radio";
import { CartContext } from "./../../Cart";
import ItemDetails from "./../ItemDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import DescriptionProduct from "./../DescriptionProduct";
import CommentsProduct from "./../CommentsProduct";
import StructureProduct from "./../StructureProduct";
import classnames from "classnames";

import "./styles.scss";

class DetailsProduct extends React.Component {
  state = {
    data: null,
    activeValue: {
      weight: 0,
      price: 0,
      sale: 0
    },
    counter: 1,
    price: 0,
    sale_price: 0,
    titleActiveDescription: true,
    titleActiveStructure: false,
    titleActiveFeedback: false
  };

  componentDidMount() {
    // fetch(`/product/${this.props.match.params.productId}`)
    //   .then(response => response.json())
    //   .then(data => {
    //
    //     this.setState({
    //       data,
    //       activeValue: data.details_weights[0],
    //       price: data.details_weights[0].price * data.details_weights[0].weight,
    //       sale_price: data.details_weights[0].sale * data.details_weights[0].weight
    //     });
    //   })
    const { data } = this.props;

    this.setState({
      data,
      activeValue: data.details_weights[0],
      price: (
        data.details_weights[0].price * data.details_weights[0].weight
      ).toFixed(0),
      sale_price: (
        data.details_weights[0].sale * data.details_weights[0].weight
      ).toFixed(0)
    });
  }

  handleChange = activeValue => {
    this.setState({ activeValue });
  };

  salePrice = () =>
    (
      +this.state.activeValue.sale *
      +this.state.counter *
      +this.state.activeValue.weight
    ).toFixed(0);

  price = () =>
    (
      +this.state.activeValue.price *
      +this.state.counter *
      +this.state.activeValue.weight
    ).toFixed(0);

  handleIncrease = () => {
    this.setState({ counter: this.state.counter + 1 }, () => {
      const sale_price = this.salePrice();
      const price = this.price();

      this.setState({ price, sale_price });
    });
  };

  handleDecrease = () => {
    if (this.state.counter > 1) {
      this.setState({ counter: this.state.counter - 1 }, () => {
        const sale_price = this.salePrice();
        const price = this.price();

        this.setState({ price, sale_price });
      });
    }
  };

  handleClickItem = activeValue => {
    var sale_price = 0;
    var price = 0;

    var sale_price = (
      +activeValue.sale *
      +activeValue.weight *
      this.state.counter
    ).toFixed(0);

    var price = (
      +activeValue.price *
      +activeValue.weight *
      this.state.counter
    ).toFixed(0);

    this.setState({ activeValue, price, sale_price });
  };

  handleClickTitleDescription = () => {
    this.setState({
      titleActiveDescription: !this.state.titleActiveDescription,
      titleActiveStructure: false,
      titleActiveFeedback: false
    });
  };

  handleClickTitleStructure = () => {
    this.setState({
      titleActiveStructure: !this.state.titleActiveStructure,
      titleActiveDescription: false,
      titleActiveFeedback: false
    });
  };

  handleClickTitleFeedback = () => {
    this.setState({
      titleActiveFeedback: !this.state.titleActiveFeedback,
      titleActiveStructure: false,
      titleActiveDescription: false
    });
  };

  render = () => {
    const { data } = this.props;
    const {
      counter,
      titleActiveDescription,
      titleActiveStructure,
      titleActiveFeedback
    } = this.state;

    return (
      <CartContext.Consumer>
        {({ list, addToCart }) => (
          <React.Fragment>
            <div className="product">
              <div className="row">
                <div className="details">
                  <div className="product_image">
                    <img
                      src="image/details_product.jpg"
                      alt="product"
                      height="250"
                    />
                  </div>
                  <div className="product_info">
                    <div className="title"> {data.title} </div>
                    <div className="rating">
                      {data.in_stock ? (
                        <span>
                          <img src="image/check-icon.png" alt="check" />в
                          наличии
                        </span>
                      ) : (
                        <span>нет в наличии</span>
                      )}
                      <img
                        src={`image/rating-${data.rate}.png`}
                        alt="rating"
                        height="15"
                      />
                    </div>
                    <div className="delivery">
                      <div>
                        <span>Срок доставки:</span> {data.delivery_period} дней
                      </div>
                      <div>({_.size(data.comments)} отзыва)</div>
                    </div>
                    <div className="details_product">
                      <div className="col-xl-2 details">
                        {this.state.activeValue.sale ? (
                          <div className="discount discount_product">
                            <div className="price price_details">
                              <span className="sale_discount_product">
                                {this.state.sale_price}
                              </span>
                              <img
                                className="image_sale_product"
                                src="image/discount_price.svg"
                                alt="sale"
                                width="15"
                                height="30"
                              />
                            </div>
                            <div className="sale_price">
                              <span className="sale sale_product">
                                {this.state.price}
                              </span>
                              <img
                                className="image_sale"
                                src="image/sale_big.svg"
                                alt="sale"
                              />
                            </div>
                          </div>
                        ) : (
                          <div class="d-flex align-items-center">
                            <span className="price_details price_sum">
                              {this.state.price}
                            </span>
                            <img
                              className="image_price"
                              src="image/price_big.svg"
                              alt="sale"
                            />
                          </div>
                        )}
                      </div>
                      <div className="weight col-xl-10">
                        <div className="weight_items row">
                          {_.map(data.details_weights, (weight, index) => (
                            <ItemDetails
                              data={data}
                              weight={weight}
                              activeValue={this.state.activeValue}
                              onChange={this.handleChange}
                              onClick={this.handleClickItem}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="buy_details">
                      <div className="btn-buy">
                        <button className="btn" onClick={() => addToCart(data)}>
                          В корзину
                        </button>
                      </div>
                      <div className="calculation">
                        <div className="count">
                          <div className="minus" onClick={this.handleDecrease}>
                            <FontAwesomeIcon
                              className="minus_icon"
                              icon={faMinus}
                            />
                          </div>
                          <div className="count_products">{counter}</div>
                          <div className="plus" onClick={this.handleIncrease}>
                            <FontAwesomeIcon
                              className="plus_icon"
                              icon={faPlus}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="product_tabs">
                  <div className="product_tabs_titles">
                    <span
                      className={classnames("product_tabs_title", {
                        active: titleActiveDescription
                      })}
                      onClick={this.handleClickTitleDescription}
                    >
                      Описание
                    </span>
                    <span
                      className={classnames("product_tabs_title", {
                        active: titleActiveStructure
                      })}
                      onClick={this.handleClickTitleStructure}
                    >
                      Состав
                    </span>
                    <span
                      className={classnames("product_tabs_title", {
                        active: titleActiveFeedback
                      })}
                      onClick={this.handleClickTitleFeedback}
                    >
                      Отзывы ({_.size(data.comments)})
                    </span>
                  </div>
                  {this.state.titleActiveDescription ? (
                    <DescriptionProduct data={data.description} />
                  ) : null}
                  {this.state.titleActiveStructure ? <CommentsProduct /> : null}
                  {this.state.titleActiveFeedback ? <StructureProduct /> : null}
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
      </CartContext.Consumer>
    );
  };
}

export default withRouter(DetailsProduct);

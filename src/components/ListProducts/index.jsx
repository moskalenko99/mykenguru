import React from "react";
import _ from "lodash";
import { CartContext } from "../../Cart";
import { Link } from "react-router-dom";

import Radio from "../Radio";
import "./styles.scss";

class ListProducts extends React.Component {
  state = {
    data: null,
    activeValue: {
      weight: 0,
      price: 0,
      sale: 0
    },

    price: 0,
    sale_price: 0
  };

  handleChange = activeValue => {
    this.setState({ activeValue });
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
  handleClickItem = activeValue => {
    var sale_price = 0;
    var price = 0;

    var sale_price = (+activeValue.sale * +activeValue.weight).toFixed(0);

    var price = (+activeValue.price * +activeValue.weight).toFixed(0);

    this.setState({ activeValue, price, sale_price });
  };

  render() {
    const { data } = this.props;
    const { activeValue, price, sale_price } = this.state;

    return (
      <CartContext.Consumer>
        {({ list, addToCart }) => (
          <div className="row no-gutters product_item_list">
            <div className="col-md-2 image_cart">
              <Link className="link_title" to="/product">
                <img
                  src="image/product.png"
                  className="card-img"
                  alt="product"
                />
              </Link>
            </div>
            <div className="col-md-10">
              <div className="card-body">
                <div className="cart_rating">
                  <div>
                    <img src={`image/rating-${data.rate}.png`} alt="rating" />
                  </div>
                  {data.in_stock ? (
                    <span className="stock">
                      <img src="image/check-icon.png" alt="check" />в наличии
                    </span>
                  ) : (
                    <span className="stock">нет в наличии</span>
                  )}
                  {_.size(data.details_weights) !== 1
                    ? _.map(data.details_weights, (details_weight, index) => {
                        if (index < 4) {
                          return (
                            <Radio
                              key={`Radio-${details_weight.weight}`}
                              value={details_weight}
                              activeValue={this.state.activeValue}
                              onChange={this.handleChange}
                              onClick={this.handleClickItem}
                            >
                              {details_weight.weight >= 1
                                ? `${details_weight.weight}кг`
                                : `${details_weight.weight * 1000}гр`}
                            </Radio>
                          );
                        }
                      })
                    : null}
                </div>

                <div className=" d-flex info_product">
                  <p className="card-text col-md-7">
                    <Link className="link_title" to={`/product/${data.id}`}>
                      {data.title}
                    </Link>
                  </p>
                  {activeValue.sale ? (
                    <div className="discount">
                      <div className="price">
                        <span className="sale_discount">{sale_price}</span>
                        <img
                          className="image_sale"
                          src="image/discount_price.svg"
                          alt="sale"
                          width="15"
                          height="15"
                        />
                      </div>
                      <div className="sale_price">
                        <span className="sale">{price}</span>
                        <img
                          className="image_sale"
                          src="image/sale.svg"
                          alt="sale"
                        />
                      </div>
                    </div>
                  ) : (
                    <div class="d-flex align-items-center cost col-md-2">
                      <span className="price">{price}</span>
                      <img
                        className="image_price"
                        src="image/price.svg"
                        alt="sale"
                      />
                    </div>
                  )}
                  <div className="btn-buy">
                    <button className="btn" onClick={() => addToCart(data)}>
                      В корзину
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </CartContext.Consumer>
    );
  }
}

export default ListProducts;

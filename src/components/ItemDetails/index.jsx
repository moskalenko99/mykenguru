import React from "react";
import Radio from "./../Radio";

import "./styles.scss";

class ItemDetails extends React.Component {
  handleChange = () => {
    this.props.onChange(this.props.weight);
  };

  handleClick = () => {
    this.props.onClick(this.props.weight);
  };

  render = () => {
    const { weight } = this.props;

    return (
      <React.Fragment>
        <div
          className={`item col-xl-3 ${
            weight === this.props.activeValue ? " item--checked" : ""
          }`}
          onChange={this.handleChange}
          onClick={this.handleClick}
        >
          <div className="radio">
            <Radio
              key={`Radio-${weight}`}
              value={weight}
              activeValue={this.props.activeValue}
              // onChange={this.handleChange}
              // onClick={this.handleClick}
            />
            <span className="weight">
              {weight.weight >= 1
                ? `${weight.weight}кг`
                : `${weight.weight * 1000}гр`}
            </span>
          </div>
          <span className="item__dots" />
          {weight.sale ? (
            <div className="weight_price sale">{weight.price}р/кг</div>
          ) : (
            <div className="weight_price">{weight.price}р/кг</div>
          )}
        </div>
      </React.Fragment>
    );
  };
}

export default ItemDetails;

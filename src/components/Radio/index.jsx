import React from "react";
import Icon from "./Icon";

import "./styles.scss";

class Radio extends React.Component {
  handleChange = () => {
    this.props.onChange(this.props.value);
  };

  handleClick = () => {
    this.props.onClick(this.props.value);
  };

  render = () => (
    <label className="Radio">
      <input
        type="radio"
        checked={this.props.value === this.props.activeValue}
        onChange={this.handleChange}
        onClick={this.handleClick}
        className="Radio__flag"
        hidden
      />
      <Icon />
      <span className="Radio__title">{this.props.children}</span>
    </label>
  );
}

export default Radio;

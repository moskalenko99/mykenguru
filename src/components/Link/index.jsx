import React from "react";
import { Link as BaseLink } from "react-router-dom";

import "./styles.scss";

class Link extends React.Component {
  render = () => {
    if (this.props.refrashed) {
      return (
        <a href={this.props.href} className="Link Link--refrashed">
          {this.props.children}
        </a>
      );
    }

    return (
      <BaseLink href={this.props.href} className="Link">
        {this.props.children}
      </BaseLink>
    );
  };
}

export default Link;

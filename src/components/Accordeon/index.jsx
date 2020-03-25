import React from "react";
import _ from "lodash";
import AccordeonItem from "./AccordeonItem";

import "./styles.scss";

class Accordeon extends React.Component {
  state = _.reduce(
    this.props.children,
    (acc, item, index) => {
      acc[index] = false;
      return acc;
    },
    {}
  );

  handleToggle = index => {
    this.setState(prevState => ({ [index]: !prevState[index] }));
  };

  render = () => (
    <div className="Accordeon">
      {_.isArray(this.props.children)
        ? _.map(this.props.children, (child, index) =>
            _.get(child, "title") && _.get(child, "content") ? (
              <AccordeonItem
                key={`AccordeonItem-${index}-${_.get(child, "title")}`}
                index={index}
                active={this.state[index]}
                title={_.get(child, "title")}
                onToggle={this.handleToggle}
              >
                {_.get(child, "content")}
              </AccordeonItem>
            ) : null
          )
        : null}
    </div>
  );
}

export default Accordeon;

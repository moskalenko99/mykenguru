import React from "react";

class AccordeonItem extends React.Component {
  state = {
    height: "auto"
  };

  meashureRef = node => {
    requestAnimationFrame(() => {
      if (node) {
        const height = node.offsetHeight;
        if (this.state.height !== height) {
          this.setState({ height });
        }
      }
    });
  };

  handleClick = () => {
    this.props.onToggle(this.props.index);
  };

  render = () => {
    return (
      <div className="AccordeonItem__wrapper">
        <div className="AccordeonItem__title" onClick={this.handleClick}>
          <span className="AccordeonItem__text">{this.props.title}</span>
        </div>
        <div
          className="AccordeonItem"
          style={{
            height: this.props.active ? this.state.height : 0
          }}
        >
          <div className="AccordeonItem__inner" ref={this.meashureRef}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  };
}

export default AccordeonItem;

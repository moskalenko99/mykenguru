import React from "react";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import "./styles.scss";

class Colorpicker extends React.Component {
  state = {
    color: "rgb(127, 127, 127)",
    min: this.props.min,
    max: this.props.max
  };

  onUpdate = (render, handle, value, un, percent) => {
    this.setState({ min: render[0], max: render[1] });
  };

  render() {
    return (
      <div className="slider" id="colorpicker">
        <div className="sort_price">
          <a className="sort_from">
            <div>
              <span className="from">Oт</span>
              <input
                className="input_from"
                onClick={this.changeByRef_1}
                value={this.state.min}
              />
            </div>
          </a>
          <a className="sort_to">
            <div>
              <span className="to">до</span>
              <input
                className="input_to"
                onClick={this.changeByRef_2}
                value={this.state.max}
              />
            </div>
          </a>
        </div>
        <Nouislider
          className="noui_slider"
          start={[20, 80]}
          connect={[false, true, false]}
          range={{
            min: this.props.min,
            max: this.props.max
          }}
          onUpdate={this.onUpdate}
        />
      </div>
    );
  }
}

export default Colorpicker;

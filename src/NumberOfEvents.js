import React, { Component } from "react";
import "./NumberOfEvents.css"

class NumberOfEvents extends Component {
  state = { num: 32 };

  changeNum(value) {
    this.setState({ num: value });
    this.props.updateNumberOfEvents(undefined, value)
  }

  render() {
    const { num } = this.state;

    return (
      <div className="NumberOfEvents">
        <h5>
        Number of Events
        </h5>
          <input
          className="num"
          type="number"
          value={num}
          onChange={(event) => {
            this.changeNum(event.target.value);
          }}
        >
        </input>
      </div>
    );
  }
}

export default NumberOfEvents;
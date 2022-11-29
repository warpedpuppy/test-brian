import React, { Component } from "react";

class Event extends Component {
  render() {
    return <div class='event'>
      <div id="title">
        Title
      </div>
      <button class='details-button'>
            See Details
      </button>
    </div>;
  }
}
export default Event;
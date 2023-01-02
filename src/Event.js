import React, { Component } from "react";

class Event extends Component {
  state = { collapsed: true };
  toggleDetails = () => {
    this.setState((prevState) => ({
      collapsed: !prevState.collapsed,
    }));
  };

  render() {
    const { event } = this.props;
    const { collapsed } = this.state;
    return (
      <div className="event">
        <h1 className="summary">{event.summary}</h1>

        <p className="event-address">
          {`@${event.summary} | ${event.location}`}
          {/* 
    type literal that is combining the summary & location into a single paragraph block 
    */}
        </p>
        {!collapsed && (
          <>
            <h2 className="about">About Event:</h2>
            <a className="link" href={event.htmlLink}>
              Click Here to See Additional Details!
            </a>
            <p className="description">{event.description}</p>
          </>
        )}
        <p className="event-start-time">
          {new Date(event.start.dateTime).toString()}
        </p>

        <button className="details-button" onClick={() => this.toggleDetails()}>
          {collapsed ? "show" : "hide"}
        </button>
      </div>
    );
  }
}
export default Event;

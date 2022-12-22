import React, { Component } from "react";
import { InfoAlert } from './Alert';
import './styles/CitySearch.css';


class CitySearch extends Component {
  state = {
    query: "",
    suggestions: [],
  };
  handleInputChanged = (event) => {
    const value = event.target.value;
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    this.setState({
      query: value,
      suggestions,
      showSuggestions:false,
      infoText:''
    });
    if (suggestions.length === 0) {
      this.setState({
        query: value,
        infoText: 'We can not find the city you are looking for. Please try another city',
      });
    } else {
      return this.setState({
        query: value,
        suggestions,
        infoText:''
      });
    }
  };
  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      suggestions : []
    });
    this.props.updateEvents(suggestion);
  }
 
  render() {
    return (
      <div className="CitySearch">
        <InfoAlert className="alert" text={this.state.infoText} />
        <input
          type="text"
          className="city"
          value={this.state.query}
          onChange={this.handleInputChanged}
          //The code takes the value from the input and updates the state of query based on that value.
        />
        <ul className="suggestions">
          {this.state.suggestions.map((suggestion) => (
            <li 
            key={suggestion}
              onClick={() => this.handleItemClicked(suggestion)}>{suggestion}
            </li>
          ))}
      {this.state.suggestions.length !== 0 && <li key="all" onClick={() => this.handleItemClicked("all")}>
        <b>See all cities</b>
      </li>}
        </ul>
      </div>
    );
  }
}

export default CitySearch;

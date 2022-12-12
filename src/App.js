import React, { Component } from 'react';
import './styles/App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from "./NumberOfEvents";
import { getEvents, extractLocations } from './api';
import './styles/nprogress.css';

class App extends Component {
  state = {
    events: [],
    locations:[],
    eventCount: 32
  }

  updateEvents = (location, eventCount) => {
    eventCount = eventCount || 32;
    location = location || "all";
    //two parameters state that the displayed number of events is either the event count chosen by the user, or 32 as a base value
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents.slice(0, eventCount)
      //the slice begins at 0, the first entry, and runs to 1 less than eventCount
      });
    });
  }


  render() {
    return (
      <div className="App">
        <CitySearch 
        locations={this.state.locations} 
        updateEvents={this.updateEvents} />
        <NumberOfEvents
        updateEvents={this.updateEvents} />
        <EventList 
        events={this.state.events} />
      </div>
    );
  }
  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }
}

export default App;
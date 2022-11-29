import React from 'react';
import Event from '../Event';
import { shallow } from 'enzyme';
import { mockData } from '../mock-data';


describe('<Event /> component', () => {
    let EventWrapper;
    const event = mockData[0];
    //mock data starts at position zero
    beforeAll(() => {
    EventWrapper = shallow(<Event event={event} />);
    });    


    test('Eventwrapper is defined /> component', () => {
        expect(EventWrapper).toBeDefined();
    });

      
    test('renders the summary as a header /> component', () =>{
        const summary = EventWrapper.find("h1.summary");
        expect(summary).toHaveLength(1);
        //checks to make sure the summary is not an empty field
        expect(summary.text()).toBe(event.summary);
        //checks to make sure the displayed summary text is the same as the mock data text
    })
    test("renders the event starting time details in a paragraph", () => {
        const eventStart = EventWrapper.find("p.event-start-time");
    //eventStart is finding the event start time as rendered in a paragraph
        expect(eventStart).toHaveLength(1);
        //expects the eventstart block to be at least 1 object
        expect(eventStart.text()).toBe(new Date(event.start.dateTime).toString());
        //expects the eventstart text to be a date in given format
      });
      test("renders the location/address details in a paragraph", () => {
        const eventLocation = EventWrapper.find("p.event-address");
    //event location should be the event-address from mock data in details
        expect(eventLocation).toHaveLength(1);
        //event location should exist
        expect(eventLocation.text()).toBe(`@${event.summary} | ${event.location}`);
        //event location text should be type literal combination of summary & location
      });
      test("renders the 'see details' button when collapsed", () => {
        const detailsButton = EventWrapper.find("button.details-button");
    //find the button if the details are collapsed
        expect(detailsButton).toHaveLength(1);
        expect(detailsButton.text()).toBe("see details");
    //button text should be "see details"  
    });
      test("renders collapsed by default", () => {
        expect(EventWrapper.state("collapsed")).toBe(true);
      });
      test("change to expanded if collapsed", () => {
        const detailsButton = EventWrapper.find("button.details-button");
    
        expect(detailsButton.text()).toBe("see details");
        expect(EventWrapper.find("h2.about")).toHaveLength(0);
        expect(EventWrapper.find("a.link")).toHaveLength(0);
        expect(EventWrapper.find("p.description")).toHaveLength(0);
        detailsButton.simulate("click");
        expect(EventWrapper.state("collapsed")).toBe(false);
      });
      
      test("change to collapsed if expanded", () => {
        EventWrapper.setState({ collapsed: false });
    

        const detailsButton = EventWrapper.find("button.details-button");
        const aboutHeader = EventWrapper.find("h2.about");
        const link = EventWrapper.find("a.link");
        const description = EventWrapper.find("p.description");
    
        expect(aboutHeader).toHaveLength(1);
        expect(aboutHeader.text()).toBe("About Event:");
        expect(link).toHaveLength(1);
        expect(link.text()).toBe("Click Here to See Additional Details!");
        expect(link.prop("href")).toBe(event.htmlLink);
        expect(description).toHaveLength(1);
        expect(description.text()).toBe(event.description);
    
        detailsButton.simulate("click");
        expect(EventWrapper.state("collapsed")).toBe(true);
      });
    });
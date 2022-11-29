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


});



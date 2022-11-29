import React from 'react';
import Event from '../Event';
import { shallow } from 'enzyme';
import { mockData } from '../mock-data';


describe('<Event /> component', () => {
    let EventWrapper;
    const event = mockData[0];
    beforeAll(() => {
    EventWrapper = shallow(<Event event={event} />);
    });    


    test('Eventwrapper is defined /> component', () => {
        expect(EventWrapper).toBeDefined();
    });

    test('<Ensure Div is rendered /> component', () => {
        expect(EventWrapper.find('.event')).toHaveLength(1);
    })

    test('<Event Title is rendered /> component', ()=> {
        expect(EventWrapper.find('.summary')).toBe(1);
    })

    test('renders the summary as a header /> component', () =>{
        expect(EventWrapper.find('.summary')).toBe(h1.summary);
    })


});



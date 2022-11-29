import React from 'react';
import Event from '../Event';
import { shallow } from 'enzyme';
import { mockData } from '../mock-data';
import { fireEvent } from '@testing-library/react';
import { render } from '@testing-library/react';


describe('<Event /> component', () => {
    let EventWrapper;
    beforeAll(() => {
    EventWrapper = render(<Event />);
    });    


    test('<Ensure Div is rendered /> component', () => {
        expect(EventWrapper.find('.event').length).toEqual(1);
    })

    test('<Event Title is rendered /> component', ()=> {
        expect(EventWrapper.find('#title')).toHaveLength(1);
    });
});



    // test('<Ensure event title is rendered properly /> component'() => {
    //     expect
    // })

//     test('Button opens/closes dropdown on click', () => {
//         const {button} = shallow(render(<mockData />));
//         expect(showDetails).tobe(true);
//         fireEvent.click(button);
//     });

    // test('<loads details from mockData /> component', () => {
    //     test('the details are loaded from mockData')
    // }

    // test('<dropdown shows correct details />, component' () => {
    //     test('the details of the loaded mockData matches the event')
    //     const button = 
    //     expect(button.length).toBe(1);
    //     button.simulate('click');
    // })

    // test("renders collapsed by default", () => {
        

  
// });

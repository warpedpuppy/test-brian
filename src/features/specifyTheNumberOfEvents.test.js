import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

const feature = loadFeature('./src/features/specifyTheNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When user hasn\’t specified a number, 32 is the default number.', ({ given, when, then }) => {
        let AppWrapper;
        given('the user is viewing the main page', () => {
            AppWrapper = mount(<App />);

        });
    
        when('the user hasn\'t input a specific number or first visits the app', () => {
            expect(AppWrapper.find(".EventList")).toHaveLength(1);
        });
            then('the default number of events to display is 32', () => {
            AppWrapper.update();
            expect(AppWrapper.find(".event")).toHaveLength(32)
        });
    });

    // test('User can change the number of events they want to see.', ({ given, when, then }) => {
    //     let AppWrapper;
    //     given('the user is viewing the main page', () => {
    //         AppWrapper = mount(<App />);
    //     });
            
    //     when('the user changes the numerical value in the display box', () => {
        
    //     });
    
    //     then('the amount of events shown changes',() => {
           
    //     });
    // });
});
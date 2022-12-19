import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import  Event  from '../Event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapsed by default', ({ given, when, then }) => {
        given('The user open the app', () => {
    
        });
    
        let AppWrapper;
        when('The user lands on the main page', () => {
          AppWrapper = mount(<App />);
        });
    
        then('The event detail pages are collapsed', () => {
            AppWrapper.update();
            expect(AppWrapper.find(Event, '.details-button')).toHaveLength(2);
        });
    });

    test('User can expand an event to see its details', ({ given, when, then }) => {
        let AppWrapper;
        given('a user is viewing the main page', () => {
            AppWrapper = mount(<App />);
        });
            
        when('the user clicks the button to see more details', async () => {
            await AppWrapper.find(".event", " .details-button").at(0).simulate('click');
        });
    
        then('the event is expanded to show the details', async () => {
            let EventWrapper = AppWrapper.find(".event")
            expect(EventWrapper.find(" .description").at(0)).toHaveLength(1);
        });
    });

    test('User can collapse an event to hide its details', ({ given, when, then }) => {
        let AppWrapper;
        given('the user is viewing an expanded event', () => {
            AppWrapper = mount(<App />);
            AppWrapper.find(".event .details-button").at(0).simulate('click');
        });
    
        when('the user clicks the close details button', () => {
            AppWrapper.find(".event", ".details-button").at(0).simulate('click');
        });
    
        then('the event collapses back to it\'s initial state', () => {
            let EventWrapper = AppWrapper.find(".event")
            expect(EventWrapper.find(".description").at(0)).toHaveLength(0);
        });
    });
});
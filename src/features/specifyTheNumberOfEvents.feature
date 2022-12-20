Feature: SPECIFY NUMBER OF EVENTS
    Scenario:When user hasn’t specified a number, 32 is the default number.
        Given the user is viewing the main page
        When the user hasn't input a specific number or first visits the app
        Then the default number of events to display is 2

    Scenario:User can change the number of events they want to see.
        Given the user is on the main page
        When the user changes the numerical value in the display box
        Then the amount of events shown changes
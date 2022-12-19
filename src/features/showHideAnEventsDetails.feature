Feature: Show an Events details
    Scenario:An event element is collapsed by default
        Given The user open the app
        When The user lands on the main page
        Then The event detail pages are collapsed

    Scenario:User can expand an event to see its details
        Given a user is viewing the main page
        When the user clicks the button to see more details
        Then the event is expanded to show the details

    Scenario:User can collapse an event to hide its details
        Given the user is viewing an expanded event
        When the user clicks the close details button
        Then the event collapses back to it's initial state
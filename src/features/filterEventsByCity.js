import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/filterEventsByCity.feature');

defineFeature(feature, test => {
    test("testing test", ({given, when, then}) =>{

    })
});
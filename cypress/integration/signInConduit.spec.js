/// <reference types="cypress" />

const { waitForDebugger } = require("inspector");


it('User should login with valid data', () =>  {
    cy.visit('https://react-redux.realworld.io/#/login?_k=tsl2gv');
    cy.get(':nth-child(1) > .form-control').type('roquxogowi@mailinator.com');
    cy.get(':nth-child(2) > .form-control').type('Pa$$w0rd!');
    cy.get('.btn').click();
    
    cy.get(':nth-child(4) > .nav-link').contains('Facere aspernatur co').should('exist');

});
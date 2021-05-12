/// <reference types="cypress" />

let user;

describe('Your Second Test', () => {
    before(function () {
        cy.task("freshUser").then((object) => {
            user = object;
        });
    });


    it('Sign up with faker', () => {
        cy.visit('https://react-redux.realworld.io/#/register?_k=fvig8n');
        cy.get(':nth-child(1) > .form-control').type(user.username);
        cy.get(':nth-child(2) > .form-control').type(user.email);
        cy.get(':nth-child(3) > .form-control').type(user.password);
        cy.get('.btn').click();
        cy.get(':nth-child(4) > .nav-link').contains(user.username).should('exist')
    })
  })


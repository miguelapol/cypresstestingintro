///<reference types="cypress"/>

describe('Carga la pagina principal', () => {
    it('carga la página principal', () => {
      cy.visit('http://127.0.0.1:5501/Curso%20JS%20Moderno/52-Testing-Cypress/index.html');
    
      cy.get('[data-cy="formulario"]')
        .submit();

    //selecionar alerta 
    cy.get('[data-cy=alerta]')
    .invoke('text')
    .should('equal','Todos los campos son Obligatorios')

    cy.get('[data-cy=alerta]')
    .should('have.class','alert-danger')
     
    });
  });
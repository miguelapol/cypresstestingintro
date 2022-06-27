///<reference types="cypress"/>

describe('Carga la pagina principal', () => {
  it('carga la página principal', () => {
    cy.visit('http://127.0.0.1:5501/Curso%20JS%20Moderno/52-Testing-Cypress/index.html');
    cy.contains('h1','Administrador de Pacientes de Veterinaria');
    cy.get('h1').should('exist');
  });
});
///<reference types="cypress"/>

describe('Carga la pagina principal', () => {
  it('carga la página principal', () => {
    cy.visit('http://127.0.0.1:5501/Curso%20JS%20Moderno/52-Testing-Cypress/index.html');
    //verificar el elemento y su texti
    cy.contains('[data-cy="titulo-proyecto"]','Administrador de Pacientes de Veterinaria');
    //verificar que existe
    cy.get('[data-cy="titulo-proyecto"]').should('exist');
  });
});
///<reference types="cypress"/>

describe('Carga la pagina principal', () => {
  it('carga la página principal', () => {
    cy.visit('http://127.0.0.1:5501/Curso%20JS%20Moderno/52-Testing-Cypress/index.html');
    //verificar el elemento y su texti
    cy.contains('[data-cy="titulo-proyecto"]','Administrador de Pacientes de Veterinaria');
    //verificar que existe
    cy.get('[data-cy="titulo-proyecto"]').should('exist');
    //verificar que exista el elemento y contenga un texto prueba y lo que se debe de ver
    cy.get('[data-cy="titulo-proyecto"]')
    .invoke('text')
    .should('equal','Administrador de Pacientes de Veterinaria')

    //verificar el texto de las citas
    //el get es para obtener
    cy.get('[data-cy="citas-heading"]')
    .invoke('text')
    .should('equal','No hay Citas, comienza creando una')

    cy.get('[data-cy="citas-heading"]')
    .invoke('text')
    .should('not.equal','miguel apol')



  });
});
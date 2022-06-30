///<reference types="cypress"/>

describe('Llena los campos para una nueva cita y la edita', () => {
    it('campos nueva cita', () => {
    cy.visit('/index.html');
    cy.get('[data-cy="mascota-input"]')
     .type('Luna');
     cy.get('[data-cy="propietario-input"]')
     .type('Miguel');
     cy.get('[data-cy="telefono-input"]')
     .type('55986628');
     cy.get('[data-cy="fecha-input"]')
     .type('2002-11-25')
     cy.get('[data-cy="hora-input"]')
     .type('10:30')
     cy.get('[data-cy="sintomas-input"]')
     .type('EL perrito se siente bastante bien')

     cy.get('[data-cy="submit-cita"]')
     .click();
     cy.get('[data-cy="citas-heading"]')
     .invoke('text')
     .should('equal','Administra tus Citas')
     cy.get('[data-cy="alerta"]')
     .invoke('text')
     .should('equal','Se agregó correctamente')

     cy.get('[data-cy="alerta"]')
     .should('have.class','alert-success')
    
    
    });
    it('Editar la cita',()=>{
        cy.get('[data-cy="btn-editar"]')
        .click();
        cy.get('[data-cy="mascota-input"]')
        //va a limpiar el cuadro
        .clear()
        .type('Nuevo nombre');
        cy.get('[data-cy="submit-cita"]')
        .click();
        cy.get('[data-cy="alerta"]')
        .invoke('text')
        .should('equal','Guardado Correctamente')
    })

  });
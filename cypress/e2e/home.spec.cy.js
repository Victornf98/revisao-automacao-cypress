
it('must access the website', () => {

  cy.visit('https://training-wheels-qaninja.herokuapp.com/')

//validando nome
  cy.title().should('eq', 'Training Wheels | QAninja')
//validando imagem
  cy.get('ul[class=menu-list]').should('be.visible')
})


  it('must mark the item homem formiga', () => {

    cy.visit('https://training-wheels-qaninja.herokuapp.com/radios')

    cy.get('input[value=antman]')
    .click()
    .should('be.checked')





  })

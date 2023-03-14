
  it('must select Bucky', () => {

    cy.visit('https://training-wheels-qaninja.herokuapp.com/select')

    cy.get('#avengerList')
    .select('Bucky')
    .should('have.value', '2')

  })

  it('must select Tony Stark without using ID', function(){

    cy.visit('https://training-wheels-qaninja.herokuapp.com/select')

    cy.contains('option', 'Selecione um personagem')
    .parent()
    .select('Tony Stark')
    .should('have.value', '3')


  })

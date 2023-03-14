
it('must mark the fields I chose', () => {

  cy.visit('https://training-wheels-qaninja.herokuapp.com/checkboxes')

const movies = [
  'cap',
  'avengers',
  'guardians',
  'antman'
]

//looping para percorrer por uma lista de dados (forEach)
movies.forEach(function(m){
  cy.get(`input[name=${m}]`)
  .click()
  .should('be.checked')

})
})

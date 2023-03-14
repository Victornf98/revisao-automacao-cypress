
it('must select birthday', function () {

    cy.visit('https://training-wheels-qaninja.herokuapp.com/datepicker')

    const date = {
        month: 'set',
        year: '1998',
        day: '21'

    }

    cy.get('.datetimepicker-dummy-input').click()
    cy.get('.datepicker-nav-month').click()
    cy.contains('.datepicker-month', date.month).click()
    cy.get('.datepicker-nav-year').click()
    cy.contains('.datepicker-year', date.year).click()
    cy.contains('button[class=date-item]', date.day).click()

})
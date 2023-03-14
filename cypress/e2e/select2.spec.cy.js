
describe('automation web', function () {

    beforeEach('saving url', function () {
        cy.visit('https://training-wheels-qaninja.herokuapp.com/apps/select2/index.html')

    })

    it('must select a framework', function () {

        cy.get('.select2-selection--single').click()
        cy.contains('.select2-results__option', 'Cypress').click()

    })

    it('must select more than one framework', function () {

        const frameworks = [
            'Cypress',
            'Playwright',
            'Robot Framework'
        ]

        frameworks.forEach(function (framework) {
            cy.get('.select2-selection--multiple').click()
            cy.contains('.select2-results__option', framework).click()

        })
    })
})




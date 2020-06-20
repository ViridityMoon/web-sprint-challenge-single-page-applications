describe('pizza app testing', function () {
    it('Can type in name box', function () {
        cy.visit('http://localhost:3000')
        cy.contains('Pizza').click()
        cy.url().should('include', '/pizza')
        cy.get('.nameInput').type('Noah').should('have.value', 'Noah')
    })
    it('Can select multiple toppings', function () {
        cy.visit('http://localhost:3000/pizza')
        cy.get('[type="checkbox"]').check()

    })
    it('Can submit the form', function () {
        cy.visit('http://localhost:3000/pizza')
        cy.contains('Add to Order').click()
    })
})
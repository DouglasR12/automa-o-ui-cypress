/// <reference types="cypress" />

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('catalog.html')
    })

    it('Deve clicar em todos os botões Adicionar à cesta', () => {
        cy.get('.btn-primary').click({ multiple: true })
    })

    it('Deve clicar no primeiro botão Adicionar à cesta', () => {
        cy.get('.btn-primary').first().click()
    })

    it('Deve clicar no último botão Adicionar à cesta', () => {
        cy.get('.btn-primary').last().click()
    })

    it('Deve clicar no terceiro botão Adicionar à cesta', () => {
        cy.get('.btn-primary').eq(2).click()
    })

    it('Deve clicar no quinto botão Adicionar à cesta', () => {
        cy.get('.btn-primary').eq(4).click()
        cy.get('#global-alert-container').should('be.visible')
    })

    it('Deve clicar no nome do produto e acessar os detalhes', () => {
        cy.contains('Dom Casmurro').click()
        cy.url().should('include', 'book-details.html')

        cy.get('#add-to-cart-btn').click()
        cy.get('#alert-container')
          .should('contain', 'Livro adicionado à cesta com sucesso!')
    })

})
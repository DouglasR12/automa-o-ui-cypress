describe('Teste de login- Hub de Leitura', () => {

    it('Deve realizar login com sucesso', () => {
        cy.visit('http://localhost:3000/login.html');
        cy.get('#email').type('usuario@teste.com');
        cy.get('#password').type('user123');
        cy.get('#login-btn').click();
        cy.url().should('include', '/dashboard');
    });
    
it('Deve exibir mensagem de erro para credenciais inválidas', () => {
        cy.visit('http://localhost:3000/login.html');
        cy.get('#email').type('usuario@teste.com');
        cy.get('#password').type('wrongpassword');
        cy.get('#login-btn').click();
        cy.contains('Email ou senha incorretos').should('be.visible');
    
    });
});

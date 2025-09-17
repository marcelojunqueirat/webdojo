describe('Expert', () => {

    beforeEach(() => {
        cy.start()
    })

    it('Deve manipular os atributos de elementos do HTML', () => {
        cy.get('#email').invoke('val', 'marcelo@teste.com.br')

        cy.get('#password').invoke('attr', 'type', 'text')
            .type('123')

        cy.get('#password').invoke('removeAttr', 'class')

        cy.get('#password').invoke('attr', 'name', 'senha')

        cy.contains('button', 'Entrar')
            .invoke('hide')
            .should('not.be.visible')

        cy.contains('button', 'Entrar')
            .invoke('show')
            .should('be.visible')
    })

    it.only('Não deve logar com senha inválida', () => {
        cy.submitLoginForm('papito@webdojo.com', 'katana321')

        /* tecnica para salvar a pagina html no momento desejado do teste */
        // cy.wait(2500)
        // cy.document().then((doc) => {
        //     cy.writeFile('cypress/downloads/page.html', doc.documentElement.outerHTML)
        // })

        cy.get('[data-sonner-toaster=true]')
            .should('be.visible')
            .as('toast')

        cy.get('@toast')
            .find('.title')
            .should('have.text', 'Acesso negado! Tente novamente.')

        cy.wait(5000)
        cy.get('@toast')
            .should('not.exist')
    })
})
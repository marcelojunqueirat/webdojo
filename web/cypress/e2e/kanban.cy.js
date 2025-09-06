describe('Kanban Board', () => {
    it('Deve mover uma tarefa de Todo para DOne e atualizar o board', () => {
        cy.start()
        cy.submitLoginForm('papito@webdojo.com', 'katana123')

        cy.goTo('Kanban', 'Kanban Board')

        const dataTransfer = new DataTransfer()

        cy.contains('div[draggable=true]', 'Documentar API')
            .trigger('dragstart', { dataTransfer })

        cy.get('.column-done')
            .trigger('drop', { dataTransfer })
            .find('h3')
            .should('have.text', 'Done (4)')

        cy.get('.column-done')
            .and('include.text', 'Documentar API')
            .and('include.text', 'Criar documentação da API com Swagger')
    })
})
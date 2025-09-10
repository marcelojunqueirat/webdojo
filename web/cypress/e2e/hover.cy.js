// npm install cypress-real-events (para lidar com MOUSEOVER, não nativo cypress, deve se importa-lo no commands.js)

describe('Simulando Mouseover', () => {
    it('Deve mostrar um texto ao passar o mouse em cima do link do instagram', () => {
        cy.login()

        cy.contains('Isso é Mouseover!').should('not.exist')
        cy.get('[data-cy="instagram-link"]')
            .realHover()
        cy.contains('Isso é Mouseover!', { timeout: 2000 }).should('exist')
    })
})
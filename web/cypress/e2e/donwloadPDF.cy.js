//repo aplicação: https://github.com/papitodev/testing-pdf-file-cypress

// npm i pdf-parse -D
// criado função readPdf em support/helper.js e adicionado argumento on('task') no cypress.config -> e2e

describe('Download PDF', () => {

    it('Deve validar o conteúdo do recibo em PDF', () => {

        // Comentado pois é o acesso a outro projeto, pdf já está mockado, sem necessidade de acessar a aplciação e fazer download.
        // cy.visit('http://localhost:5173/')
        // cy.get('[data-cy="download"]')
        //     .click()

        const pdfPath = 'cypress/fixtures/recibo.pdf';

        cy.task('readPdf', pdfPath)
            .should('contain', 'Papito Shop')
            .and('contain', 'Total24.000')

    })
})
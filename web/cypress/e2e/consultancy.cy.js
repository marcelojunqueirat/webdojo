// importação sem desestruturação consultancyData.company || consultancyData.personal
// import consultancyData from '../fixtures/consultancy.json'

import { personal, company } from '../fixtures/consultancy.json'

describe('Formulário de consultoria', () => {

    // before(() => {
    //     cy.log('Isso acontece antes de todos os testes uma única vez.')
    // })

    beforeEach(() => {
        cy.login()
        cy.goTo('Formulários', 'Consultoria')

        // recuperando json com fixture (não legal, força a não seguir o padrão de arrow function para leitura)
        // cy.fixture('consultancy').as('consultancyData')
    })

    it('Deve solicitar consultoria Individual', () => {
        cy.fillConsultancyForm(personal)
        cy.subimitConsultancyForm()
        cy.validateConsultancyModal()
    })

    it('Deve solicitar consultoria In Company', () => {
        cy.fillConsultancyForm(company)
        cy.subimitConsultancyForm()
        cy.validateConsultancyModal()
    })

    it('Deve verificar os campos obrigatórios', () => {
        cy.subimitConsultancyForm()

        const requiredFields = [
            { label: 'Nome Completo', message: 'Campo obrigatório' },
            { label: 'Email', message: 'Campo obrigatório' },
            { label: 'termos de uso', message: 'Você precisa aceitar os termos de uso' }
        ]

        requiredFields.forEach(({ label, message }) => {
            cy.contains('label', label)
                .parent()
                .find('p')
                .should('be.visible')
                .should('have.text', message)
                .and('have.class', 'text-red-400')
                .and('have.css', 'color', 'rgb(248, 113, 113)')
        })
    })

    // afterEach(() => {
    //     cy.log('Isso acontece depois de cada teste')
    // })

    // after(() => {
    //     cy.log('Isso acontece depois de todos os testes uma única vez.')
    // })

})


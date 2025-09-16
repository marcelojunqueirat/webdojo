describe('DELETE /api/users/:id', () => {

    context('Remoção', () => {
        let userId

        const user = {
            name: 'Bruce Banner',
            email: 'hulk@stark.com',
            password: 'pwd123'
        }

        before(() => {
            cy.task('deleteUser', user.email)
            cy.postUser(user).then(response => {
                cy.log(response.body.user.id)
                userId = response.body.user.id
            })
        })

        it('Deve remover um usuário existente', () => {
            return cy.deleteUser(userId).then(response => {
                expect(response.status).to.eq(204)
            })
        })

        after(() => {
            cy.getUsers().then(response => {
                const hulk = response.body.find((user) => user.id === userId)
                expect(hulk).to.be.undefined
            })
        })
    })


    context('Quando o id não existe', () => {
        let userId

        const user = {
            name: 'Tony Stark',
            email: 'stark@marvel.com',
            password: 'pwd123'
        }

        before(() => {
            cy.task('deleteUser', user.email)

            cy.postUser(user).then(response => {
                cy.log(response.body.user.id)
                userId = response.body.user.id
            })

            cy.task('deleteUser', user.email)
        })

        it('Deve retornar 404 e User not found.', () => {
            return cy.deleteUser(userId).then(response => {
                expect(response.status).to.eq(404)
                expect(response.body.error).to.eq('User not found.')
            })
        })
    })
})
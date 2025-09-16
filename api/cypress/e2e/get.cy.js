describe('GET /api/users', () => {

    const heroes = [
        {
            name: "Superman",
            email: "superman@liga.com",
            password: "pwd123"
        },
        {
            name: "Batman",
            email: "batman@liga.com",
            password: "pwd123"
        },
        {
            name: "Wonder Woman",
            email: "wonderwoman@liga.com",
            password: "pwd123"
        },
        {
            name: "Flash",
            email: "flash@liga.com",
            password: "pwd123"
        },
        {
            name: "Green Lantern",
            email: "greenlantern@liga.com",
            password: "pwd123"
        }
    ];

    before(() => {
        heroes.forEach((hero) => {
            cy.postUser(hero)
        })
    })


    it('Deve retornar uma lista de usuários', () => {
        cy.getUsers().then(response => {
            expect(response.status).to.eq(200)

            heroes.forEach((hero) => {
                const found = response.body.find((user) => user.email === hero.email)
                expect(found.name).to.eq(hero.name)
                expect(found.email).to.eq(hero.email)
                expect(found).to.have.property('id')
            })
        })
    })
})


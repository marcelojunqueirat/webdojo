// import { faker } from '@faker-js/faker'

describe('POST /api/users/register', () => {
  it('Deve cadastrar um novo usuário', () => {
    const user = {
      name: 'Wolverine',
      email: 'logan@xmen.com',
      password: 'pwd123'
    }

    cy.task('deleteUser', user.email)

    /* Nativo cypress */
    // cy.request({
    //   method: 'POST',
    //   url: 'http://localhost:3333/api/users/register',
    //   body: user
    // }).then((response) => {
    //   expect(response.status).to.eq(201)

    //   cy.log(JSON.stringify(response.body))
    // })

    cy.postUser(user).then((response) => {
      expect(response.status).to.eq(201)

      expect((response.body.message)).to.eq('User successfully registered!')
      expect(response.body.user.id).to.match(/^(-?\d+)$/);
      expect((response.body.user.name)).to.eq(user.name)
      expect((response.body.user.email)).to.eq(user.email)
    })


  })

  it('Não deve cadastrar com email duplicado', () => {
    const user = {
      name: 'Cyclops',
      email: 'scott@xmen.com',
      password: 'pwd123'
    }

    cy.task('deleteUser', user.email)

    cy.postUser(user).then((response) => {
      expect(response.status).to.eq(201)
    })

    cy.postUser(user).then((response) => {
      expect(response.status).to.eq(409)
      expect(response.body.error).to.eq(`The email ${user.email} is already registered!`)
    })
  })

  it('O campo name deve ser obrigatório', () => {
    const user = {
      email: 'stormt@xmen.com',
      password: 'pwd123'
    }

    cy.postUser(user).then((response) => {
      expect(response.status).to.eq(400)

      expect((response.body.error)).to.eq('Name is required!')
    })
  })

  it('O campo email deve ser obrigatório', () => {
    const user = {
      name: 'Jean Grey',
      password: 'pwd123'
    }

    cy.postUser(user).then((response) => {
      expect(response.status).to.eq(400)

      expect((response.body.error)).to.eq('Email is required!')
    })
  })

  it('O campo senha deve ser obrigatório', () => {
    const user = {
      name: 'Charles Xavier',
      email: 'xavier@xmen.com'
    }

    cy.postUser(user).then((response) => {
      expect(response.status).to.eq(400)

      expect((response.body.error)).to.eq('Password is required!')
    })
  })

  it('Não deve passar quando JSON estiver mal formatado', () => {
    const user = `{
      name: 'Magneto'
      email: 'erick@xmen.com'
      password: 'pwd123'
    }`

    cy.postUser(user).then((response) => {
      expect(response.status).to.eq(400)

      expect((response.body.error)).to.eq('Invalid JSON format.')
    })
  })


})


# 🚀 Anotações

### Mouseover
npm install cypress-real-events  
Para lidar com MOUSEOVER, não nativo cypress  
1 - deve se importa-lo no commands.js  
2 - utilizado implementação em hover.cy.js  

### Testando PDF
repo aplicação: https://github.com/papitodev/testing-pdf-file-cypress  
npm install pdf-parse -D  
1 - criado função readPdf em support/helper.js   
2 - adicionado argumento on('task') no cypress.config -> e2e  
3 - utilizado implementação em donwloadPDF.cy.js  

### Rodar toda stack de testes

1 - Headless:  
npx cypress run

2 - Não Headless (execução assistida):  
npx cypress run --headed

3 - Apontando execução para determinado browser (padrão: electron)   
npx cypress run --browser=chrome || edge || firefox

4 - Rodar suite de teste especifica
npx cypress run --spec cypress/e2e/login.cy.js

5 - Rodar teste com tamanho especifico de tela
npx cypress run --config viewportWidth=414,viewportHeight=896

### Ferramentas Cypress

1 - Studio (gerador de teste), habilitar em cypress.config.js "experimentalStudio: true"  
2 - Gravar vídeo do teste, habilitar em cypress.config.js "video: true"    


### Docker

Subindo os serviços do docker-compose.yaml  
1 - docker compose up -d  

### Prisma (p/ api)

Biblioteca ORM para api em node  
1 - npm install prisma @prisma/client  
2 - npx prisma init  
3 - Configurar string de conn no .env (DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/BDNAME?schema=public")  
4 - Criar "Schemas" (entities) da aplicação em schema.prisma  
5 - Rodar a migration para criar automaticamente os schemas do passo 4 no BD (npx prisma migrate dev --name init)  
6 - Criar prismaClient na raiz do projeto  
Prisma pronto pra ser usado    


--------------------------------------------------------------------------------  
# Documentação
# Testes Automatizados - 🥋 WebDojo (Cypress)

Este repositório contém os testes automatizados da aplicação **Webdojo**, utilizando o framework [Cypress](https://www.cypress.io/).  
A aplicação Webdojo e os testes estão no mesmo repositório.

---

## 📂 Estrutura do Projeto

```bash
cypress/
 ├── e2e/                  # Diretório principal de testes (specs)
 ├── fixtures/             # Massa de dados e arquivos de apoio
 │   ├── anexoTeste.pdf
 │   ├── cep.json
 │   ├── consultancy.json
 │   ├── example.json
 │   └── recibo.pdf
 └── support/              # Suporte e comandos customizados
     ├── actions/
     │   └── consultancy.actions.js
     ├── commands.js
     ├── e2e.js
     ├── helper.js
     └── utils.js
```

---

## 🚀 Execução da Aplicação

Antes de rodar os testes, é necessário executar a aplicação **Webdojo**.  
Para isso, utilize o comando:

```bash
npm run dev
```

A aplicação será servida localmente em **http://localhost:3000**.

---

## 🧪 Execução dos Testes

Os testes podem ser executados de diferentes formas através dos scripts configurados no `package.json`.

### Executar todos os testes em modo headless
```bash
npm run test
```
Configuração de viewport: **1440x900**

---

### Abrir a interface do Cypress (modo interativo)
```bash
npm run test:ui
```

---

### Executar apenas os testes de login
```bash
npm run test:login
```
Configuração de viewport: **1440x900**

---

### Executar os testes de login em resolução mobile
```bash
npm run test:login:mobile
```
Configuração de viewport: **414x896**

---

## 📑 Organização dos Testes

- **Fixtures (`cypress/fixtures/`)**  
  Contém dados mockados e arquivos de apoio para os testes, como JSONs e PDFs.

- **Support (`cypress/support/`)**  
  Centraliza código de suporte:
  - `commands.js`: Comandos customizados do Cypress.
  - `helper.js` e `utils.js`: Funções utilitárias.
  - `actions/`: Arquivos de ações específicas de domínio (ex: `consultancy.actions.js`).

- **Specs (`cypress/e2e/`)**  
  Onde ficam os arquivos de testes (ex: `login.cy.js`).

---

## 📌 Requisitos

- Node.js instalado
- NPM ou Yarn
- Cypress instalado como dependência do projeto

---

## ✅ Boas Práticas

- Manter dados dinâmicos em **fixtures**.
- Centralizar funções reutilizáveis em **support**.
- Criar testes independentes e idempotentes.
- Utilizar **viewport** adequada para cada cenário (desktop/mobile).

---

## 📖 Referências

- [Documentação Oficial do Cypress](https://docs.cypress.io/)


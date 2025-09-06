# 🥋 WebDojo

## 🚀 Anotações

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

### Ferramentas Cypress

1 - Studio (gerador de teste), habilitar em cypress.config.js "experimentalStudio: true"  
2 - Gravar vídeo do teste, habilitar em cypress.config.js "video: true"  

const pdf = require('pdf-parse')
const path = require('path')
const fs = require('fs')

const readPdf = (pathToPdf) => {
    return new Promise((resolvePromise, rejectPromise) => {
        // para garantir caminho absoluto
        const pdfPath = path.resolve(pathToPdf)

        // Verifica se o arquivo existe. Se não, rejeita a promise.
        if (!fs.existsSync(pdfPath)) {
            // Rejeita a promise para que o Cypress tente novamente
            // Isso aciona o retry do cy.task
            return rejectPromise(new Error(`Arquivo PDF não encontrado: ${pdfPath}`));
        }

        // lendo arquivo
        const pdfData = fs.readFileSync(pdfPath)

        // Transformando o PDF em texto
        pdf(pdfData)
            .then(function (data) {
                resolvePromise(data.text)
            })
            .catch((error) => {
                // Se houver erro ao parsear o PDF
                rejectPromise(error);
            });
    })
}

module.exports = { readPdf }
// Função responsável por processar os dados da página
function processData() {
    // Objeto para armazenar os dados
    const attrData = {};

    // Seleciona todos os elementos com a classe '.field'
    const fields = document.querySelectorAll('.field');

    // Loop para iterar sobre os elementos '.field'
    for (let i = 0; i < fields.length; i++) {
        const field = fields[i];
        // Extrai o nome do campo
        const fieldName = field.textContent.trim().replace(/:/g, '');
        // Extrai o valor do campo
        const fieldValue = field.nextElementSibling.textContent.trim();

        // Verifica se o nome e o valor do campo foram extraídos corretamente
        if (fieldName && fieldValue) {
            // Adiciona os dados ao objeto 'attrData'
            attrData[fieldName] = fieldValue;
        } else {
            // Exibe uma mensagem de erro caso algum dado esteja faltando
            displayErrorMessage("Alguns dados não foram encontrados!");
        }
    }

    // Seleciona todos os elementos com a classe '.attr_text'
    const attrTextElements = document.querySelectorAll('.attr_text');

    // Loop para iterar sobre os elementos '.attr_text'
    for (let i = 0; i < attrTextElements.length; i++) {
        const element = attrTextElements[i];
        // Extrai o título do elemento
        const titleElement = element.querySelector('[class^="grade_"]').textContent.trim();
        // Extrai o valor do elemento
        const spanElement = element.querySelector('span').textContent.trim();

        // Verifica se o título e o valor do elemento foram extraídos corretamente
        if (titleElement && spanElement) {
            // Adiciona os dados ao objeto 'attrData'
            attrData[titleElement] = spanElement;
        } else {
            // Exibe uma mensagem de erro caso algum dado esteja faltando
            displayErrorMessage("Alguns dados não foram encontrados!");
        }
    }

    // Loop para iterar sobre as chaves do objeto 'attrData'
    for (const key in attrData) {
        if (attrData.hasOwnProperty(key)) {
            // Exibe os dados no console
            displayData(key, attrData[key]);
        }
    }
}

// Função para exibir os dados
function displayData(key, value) {
    console.log(`${key}: ${value}`);
}

// Função para exibir mensagens de erro
function displayErrorMessage(message) {
    console.log(message);
}

// Chama a função 'processData' para iniciar o processamento dos dados
processData();

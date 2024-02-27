function processData() {
    const attrData = {};

    const fields = document.querySelectorAll('.field');

    for (let i = 0; i < fields.length; i++) {
        const field = fields[i];
        const fieldName = field.textContent.trim().replace(/:/g, '');
        const fieldValue = field.nextElementSibling.textContent.trim();

        if (fieldName && fieldValue) {
            attrData[fieldName] = fieldValue;
        } else {
            displayErrorMessage("Alguns dados não foram encontrados!");
        }
    }

    const attrTextElements = document.querySelectorAll('.attr_text');

    for (let i = 0; i < attrTextElements.length; i++) {
        const element = attrTextElements[i];
        const titleElement = element.querySelector('[class^="grade_"]').textContent.trim();
        const spanElement = element.querySelector('span').textContent.trim();

        if (titleElement && spanElement) {
            attrData[titleElement] = spanElement;
        } else {
            displayErrorMessage("Alguns dados não foram encontrados!");
        }
    }

    for (const key in attrData) {
        if (attrData.hasOwnProperty(key)) {
            // Exibe os dados no console
            displayData(key, attrData[key]);
        }
    }
}

function displayData(key, value) {
    console.log(`${key}: ${value}`);
}

function displayErrorMessage(message) {
    console.log(message);
}

processData();

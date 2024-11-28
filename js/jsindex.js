function somarValores() {
    const valor1 = parseFloat(formSoma.valor1.value);
    const valor2 = parseFloat(formSoma.valor2.value);
    const resSoma = valor1 + valor2

    return formSoma.resSoma.value = resSoma.toFixed(2)
}

function subtrairValores() {
    const valor1 = parseFloat(formSub.valor1.value)
    const valor2 = parseFloat(formSub.valor2.value)
    const resSub = valor1 - valor2

    return formSub.resSub.value = resSub.toFixed(2)
}

function multiplicarValores() {
    const valor1 = parseFloat(formMult.valor1.value)
    const valor2 = parseFloat(formMult.valor2.value)
    const resMult = valor1 * valor2

    return formMult.resMult.value = resMult
}

function dividirValores() {
    const valor1 = parseInt(formDiv.valor1.value)
    const valor2 = parseInt(formDiv.valor2.value)
    const resDiv = valor1 / valor2

    formDiv.resDiv.value = resDiv
    // Se fosse a condicao "ou" ao inves de && a sintaxe seria ||
    if (valor1 <= 0 && valor2 <= 0) {
        alert("Digite um valor maior que 0!");
    }
}
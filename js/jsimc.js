function calcIMC() {
    const peso = parseFloat(formIMC.peso.value);
    const altura = parseFloat(formIMC.altura.value) / 100;
    const imc = peso / (altura * altura);
  
    formIMC.resIMC.value = imc.toFixed(2);
}
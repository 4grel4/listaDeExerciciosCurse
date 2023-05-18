const divisao = (dividendo, divisor) => {
    console.log("Resultado: " + Math.floor(dividendo/divisor)); // Essa função é útil em situações onde se deseja obter um número inteiro menor ou igual ao valor original, descartando a parte decimal.
    console.log(`Resto: ${dividendo % divisor}`) // operador de módulo.
}

divisao(11, 4)

/*
Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores.
*/
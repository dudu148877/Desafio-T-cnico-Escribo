
function somaDivisiveisPor3ou5(numero) {
  // Inicializa a variável soma.
  let soma = 0;

  
  for (let i = 1; i < numero; i++) {
      
      if (i % 3 === 0 || i % 5 === 0) {
        
          soma += i;
      }
  }

  // Retorna o resultado do somatório.
  return soma;
}

// Função que é chamada quando o botão é clicado para calcular e exibir o resultado.
function calcularSoma() {
  // Obtém os elementos HTML necessários.
  const inputNumero = document.getElementById('inputNumero');
  const resultadoElemento = document.getElementById('resultado');

  // Converte o valor do campo de entrada para um número inteiro.
  const numero = parseInt(inputNumero.value);
  
  // Chama a função para calcular o somatório.
  const resultado = somaDivisiveisPor3ou5(numero);

  // Exibe o resultado no elemento HTML.
  resultadoElemento.textContent = `O resultado é: ${resultado}`;
}






// Exemplo de uso da função para teste no console.
console.log("Eduardo de Souza");
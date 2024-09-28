const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Função para gerar a sequência de Fibonacci até um determinado número
function generateFibonacciSequence(limit) {
  const fibonacci = [0, 1];
  let nextValue = fibonacci[0] + fibonacci[1];
  
  while (nextValue <= limit) {
    fibonacci.push(nextValue);
    nextValue = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
  }

  return fibonacci;
}

// Rota para verificar se o número está na sequência de Fibonacci
app.post('/check-fibonacci', (req, res) => {
  const { number } = req.body;
  
  if (isNaN(number) || number < 0) {
    return res.status(400).json({ message: 'Número inválido. Por favor, insira um número positivo.' });
  }

  const fibonacciSequence = generateFibonacciSequence(number);
  const isInFibonacci = fibonacciSequence.includes(number);

  if (isInFibonacci) {
    return res.json({
      message: `O número ${number} pertence à sequência de Fibonacci.`,
      sequence: fibonacciSequence
    });
  } else {
    return res.json({
      message: `O número ${number} NÃO pertence à sequência de Fibonacci.`,
      sequence: fibonacciSequence
    });
  }
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

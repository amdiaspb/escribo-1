# Escribo - Desafio Técnico 1

*Nota: Como o desafio foi apenas a implementação de uma função, para facilitar o acesso e a testagem criei um site/projeto básico em html, css e js para acompanhar.*

O projeto pode ser acessado por esse [link](https://amdiaspb.github.io/escribo-1), ou baixado e executado em um navegador pelo arquivo `index.html` na pasta `src` do projeto.

Para testar, basta digitar um número no primeiro campo do site e apertar enter com ele selecionado, com isso, o resultado aparecerá no campo abaixo.

## Desafio

Implemente uma função que receba um número inteiro positivo e retorne o somatório de todos os valores
inteiros divisíveis por 3 ou 5 que sejam inferiores ao número passado.

## Resolução

```javascript
function sumDivisibles(number) {
  let sum = 0;

  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) sum += i;
  }

  return sum;
}
```

O código também pode ser implementado em qualquer ambiente JavaScript e executado passando algum valor, por exemplo: `sumDivisibles(10)`.

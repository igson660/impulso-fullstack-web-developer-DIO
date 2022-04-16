# Erros

## ECMAScript

- É um erro que aconce em tempo de execução
- É composto por: mensagem, nome, linha e call Stack (plinha de chamada)

## DOMException
- É um erro no DOM
- Erro dado na página da web
- Erro referente a estrutura da arvore DOM

### Tratamento dos erros
- Throw: é uma palavra reservada para lançar um erro
- Try...Catch: são dois blocos de código, onde no try será inserido a lógica e caso ocorra alguma espércie de erro, esse erro será enviado para o bloco do catch onde será manipulada da maneira desejada
- Finaly: é uma instrução opcional que sempre será executado após a execução to bloco anterior, seja ele o try ou o catch
- Error: é um objeto nativo do JS que aceita os seguintes parametros (message, fileName, lineNumber) onde todos são opcionais, sendo reslvado que os parametros fileName e linNumber ainda não possuem suporte em todos os navegadores. O Error também é capaz de receber um nome
`const meuErro = new Error('Mensagem de erro')
 meuErro.name = 'nomeDoErro'
`

### Links Uteis
 - [Throw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)
 - [Try...Catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
 - [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

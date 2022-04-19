var http = require('http')
var meumodulo = require('./modules/funcao')

http.createServer(function(res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    
    res.write(`<h1>Testando funções - Soma</h1>`)
    res.write('100 + 50 = ${meumodulo.soma(100,50)}')
    res.write('<hr>')

    res.write(`<h1>Testando funções - Subtração</h1>`)
    res.write('100 - 50 = ${meumodulo.subtacao(100,50)}')
    res.write('<hr>')

    res.write(`<h1>Testando funções - multiplicação</h1>`)
    res.write('100 * 50 = ${meumodulo.multiplicacao(100,50)}')
    res.write('<hr>')

    res.write(`<h1>Testando funções - Divisão</h1>`)
    res.write('100 / 50 = ${meumodulo.divisao(100,50)}')
    console.log("servidor rodando")

}).listen(8080)
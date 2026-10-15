// EXEMPLO 04 - Callback anonimo e arrow function.

function executar(acao) {
acao(); // Executa a funcão que vier como argumento.
}
// Aqui criamos uma função SEM NOME diretamente dentro da chamada.
executar(function () {
console.log("Funcionou com função anônima!");
});
// Arrow function e uma escrita mais curta para criar uma funcão.
// O simbolo => pode ser lido como "vai executar isto" neste exemplo.
executar(() => {
console.log("Funcionou com arrow function!");
});
// Nos dois casos, a função só é executada porque executar() chama acao().
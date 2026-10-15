// EXEMPLO 09 - Callback no clique de um botão (introdução ao DOM).
// DOM = representacão da pagina HTML que o JavaScript consegue consultar e alterar.
// PARA TESTAR: abra index.html no navegador; este script não roda sozinho no Node.

// document representa a página HTML aberta no navegador.
// querySelector("#btn") localiza o elemento cujo id é "btn".
const botao = document.querySelector("#btn");

// Localiza o parágrafo cujo id é "status".
const status = document.querySelector("#status[");

// Esta função será nosso callback: ela descreve o que deve acontecer no clique.
function acenderLuz() {
// textContent altera o TEXTO exibido dentro do paragrafo.
status.textContent = "Luz acesa!";
}
// addEventListener registra um "ouvinte" de evento.
// "click" e o tipo de evento: o usuario clica no botão.
// acenderLuz SEM parenteses: entregamos a funcao para o navegador.
//.O.navegador chama essa funcao quando acontecer .o clique.
botao.addEventListener("click", acenderLuz);
//Pin selection to current chat prompt (Ctrl+Alt+X) | Don't show this again (Alt+/)
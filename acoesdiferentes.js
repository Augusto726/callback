// EXEMPLO 02 - A mesma funcao executando acões diferentes.

function ligar() {
console.log("Máquina ligada!");
}

function desligar() {
console.log("Máquina desligada!");
}

// "acao" é o nome do parâmetro que vai guardar a função recebida.
function controlarMaquina(acao) {
acao(); // Executa a funcao que foi recebida neste momento.
}

controlarMaqųina(ligar);
controlarMaquina(desligar); // Agora entrega a função desligar.
// SAÍDA: Máquina ligada! / Máquina desligada!

// Entrega a função ligar.
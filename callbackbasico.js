//Exemplo CallBack básico 01
//Entender que pode entregar uma função para outra funcção

function dizerOla() {
    console.log("Olá mundo!")
}

function executar(funcaoRecebida) {
    funcaoRecebida();
}

executar(dizerOla);
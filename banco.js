var saldo = 0;

function depositar( valor ){
    saldo = saldo + valor
    console.log("Novo saldo: ", saldo)
}

function sacar( valor ){
    if ( valor > saldo){
        console.log("Não pode sacar este valor, voce tem somente : ", saldo)
    }else{
        saldo = saldo - valor;
        console.log("Novo saldo: ", saldo)
    }   
}

depositar(150)
sacar(50)

depositar(300)
sacar(1500)

depositar(600)
sacar(200)

depositar(200)
sacar(3300)

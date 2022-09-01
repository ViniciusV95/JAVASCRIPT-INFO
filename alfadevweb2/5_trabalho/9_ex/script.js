divisao = 0;
numero = prompt("insira um número");
for (x = numero ; x > 0; x--) {
    if(numero % x == 0){
        divisao++;
    }
}

if(divisao == 2){
    console.log( divisao + '  O número ' + numero + ' é um número primo')
}else{
    console.log( divisao + '  O número ' + numero + ' não é número primo')
}    

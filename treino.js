// exercicio 1

var nomeCompleto = "Joao Pedro Menezes";

console.log(nomeCompleto)

// exercicio 2

var numeroA = 15;
var numeroB = 10;

var resultado = numeroA * numeroB;

console.log(resultado)

// exercicio 3

function saudacao() {
    console.log("Oi, eu sou o Goku")
}

saudacao()

// exercicio 4

function multicacao(numeroA, numeroB) {
 console.log(numeroA * numeroB);
}

multicacao (31, 42)

// exercicio 5 

function podeDirigir(idade){
    if(idade >= 18){
        console.log("Você pode dirigir")
    } else {
        console.log("Você não pode dirigir")
    }
}

podeDirigir(18);
podeDirigir(15);

// exercicio 6

for(var x=0; x <= 20; x++){
    console.log(x);
}

// exercicio 7

for(var x = 1; x <= 20; x+=2){
    console.log(x);
}

// exercicio 8

function tabuada(numero){
    for(var x = 1; x <= 10; x++){
        console.log(numero * x)
    }
}

tabuada(7)

// exercicio 9

function converterEmHoras(minutos){
    console.log(minutos / 60, "horas");
}

converterEmHoras(180)

// End (site para treinar lógica: codewars.com)
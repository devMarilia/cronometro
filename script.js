"use strict"
 
let horas = 0;
let minutos = 0;
let segundos = 0;
let tempo = 10;
let cronometro;

function start(){
    cronometro = setInterval( () => {timer();}, tempo)
    console.log('clicou')
}

function pause(){
    clearInterval(cronometro)
    console.log('pause')
}

function stop(){
    clearInterval(cronometro) 
    horas = 0;
    minutos = 0;
    segundos = 0;
    console.log('stop')

    document.getElementById('counter').innerText = '00:00:00'
}

function timer(){
    segundos++

    if( segundos == 60){
        segundos = 0;
        minutos++

        if(minutos == 60){
            minutos = 0;
            horas++
        }
    }

    let formata = (horas < 10 ? '0' + horas : horas) + ':' + (minutos < 10 ? '0' + minutos : minutos) + ':' + (segundos < 10 ? '0' + segundos : segundos)
    document.getElementById('counter').innerText = formata
}
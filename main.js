const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".abaconteudo");
const contador =document.querySelectorAll(".contador");

const tempoobjetivo1=new Date (2025,2,025)
const tempoobjetivo2=new Date (2025,5,025)
const tempoobjetivo3=new Date (2025,8,025)
const tempoobjetivo4=new Date (2025,10,025)
let agora=new Date();
contador[0].textContent=tempoobjetivo1-agora
contador[1].textContent=tempoobjetivo2-agora
contador[2].textContent=tempoobjetivo3-agora
contador[3].textContent=tempoobjetivo4-agora

let segundos
let minutos
let horas
let dias

//math.floor()
segundos=(tempoobjetivo1-agora)/1000;
minutos=segundos/60
horas=minutos/60
dias=horas/24

contador[0].textContent= `faltam ${dias} dias,${horas} horas, ${minutos} e segundos ${segundos}`

for (let i = 0; i < botoes.length; i++){
    botoes[i].onclick = function(){
        for (let j = 0; j < botoes.length; j++){
            botoes[j].classList.remove("ativo")
            conteudo[j].classList.remove("ativo")
            
        }
        botoes[i].classList.add("ativo")
        conteudo[i].classList.add("ativo")


    }
}



let jogada1 = Math.round(Math.random()*6)
let jogada2 = Math.round(Math.random()*6)

let imagem1 = document.querySelector("#img1")
let imagem2 = document.querySelector("#img2")

let resultado = document.querySelector("#resultado")

// Mudança na primeira imagen

if(jogada1 === 1){
    imagem1.setAttribute("src", "./img/dice1.png")
}
if(jogada1 === 2){
    imagem1.setAttribute("src", "./img/dice2.png")
}
if(jogada1 === 3){
    imagem1.setAttribute("src", "./img/dice3.png")
}
if(jogada1 === 4){
    imagem1.setAttribute("src", "./img/dice4.png")
}
if(jogada1 === 5){
    imagem1.setAttribute("src", "./img/dice5.png")
}
if(jogada1 === 6){
    imagem1.setAttribute("src", "./img/dice6.png")
}

// Mudança na segunda imagem

if(jogada2 === 1){
    imagem2.setAttribute("src", "./img/dice1.png")
}

if(jogada2 === 2){
    imagem2.setAttribute("src", "./img/dice2.png")
}

if(jogada2 === 3){
    imagem2.setAttribute("src", "./img/dice3.png")
}

if(jogada2 === 4){
    imagem2.setAttribute("src", "./img/dice4.png")
}

if(jogada2 === 5){
    imagem2.setAttribute("src", "./img/dice5.png")
}

if(jogada2 === 6){
    imagem2.setAttribute("src", "./img/dice6.png")
}

// Condições de vitória ou empate

if(jogada1 > jogada2){
    resultado.textContent = "O jogador 1 foi o vencedor!"
}

if(jogada2 > jogada1){
    resultado.textContent = "O jogador 2 foi o vencedor"
}

if(jogada1 === jogada2){
    resultado.textContent = "Empate!"
}
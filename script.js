let jogada1 = Math.floor(Math.random()*6)+1
let jogada2 = Math.floor(Math.random()*6)+1

let imagem1 = document.querySelector("#img1")
let imagem2 = document.querySelector("#img2")

let resultado = document.querySelector("#resultado")



// Mudança na primeira imagen
imagem1.setAttribute("src", "./img/dice"+jogada1+".png")
// Mudança na segunda imagen
imagem2.setAttribute("src", "./img/dice"+jogada2+".png")
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
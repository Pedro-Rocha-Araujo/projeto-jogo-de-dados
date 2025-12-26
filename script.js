let jogada1 = Math.round(Math.random()*6)
let jogada2 = Math.round(Math.random()*6)

if(jogada1 > jogada2){
    console.log("Jogador 1 foi o vencedor!")
}
else if (jogada2 > jogada1){
    console.log("Jogador 2 foi o vencedor!")
}
else{
    console.log("Empate!")
}
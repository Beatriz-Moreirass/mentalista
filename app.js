function Chutar(){
    let numeroSecreto = parseInt(Math.random()*11)
    console.log(numeroSecreto)

    
    let chute = parseInt(document.querySelector('#valor').value)
    console.log(numeroSecreto, chute)

    
   if(numeroSecreto == chute){

   
   document.querySelector(".resultado").innerHTML = "Você acertou"
   }
   else{
   
   document.querySelector(".resultado").innerHTML = "Você errou"
}
}
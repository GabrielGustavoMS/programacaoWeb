 function calculaPreco(tamanho,ingredienteExtra){
     var preço;
     
     switch(tamanho){
         case "pequeno":
             preço = 20;
             break;
         case "médio":
             preço = 25;
             break;
         case "grande":
             preço = 30;
             break;
     }
     console.log(preço);
     console.log(tamanho);
     console.log(ingredienteExtra);
     
     if (ingredienteExtra == "Tomate" || ingredienteExtra =="Cebola"|| ingredienteExtra =="Azeitona"){
         
         preço = preço+7.5;
         
     }else if( ingredienteExtra == ""){
         preço = preço + 0;
     }else{
         preço = preço+11.5;
     }
     return preço;
 }
function verificaCor(preço){
    if(preço<=30){
        $("#pedido").addClass("azul");
    }else if(preço>30 && preço<=40){
        $("#pedido").addClass("vermelho");
    }else{
        $("#pedido").addClass("verde");
    }
}
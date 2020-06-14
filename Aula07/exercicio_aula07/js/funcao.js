$(function(){});
 
    function calcularMedia(n1,n2,n3,n4){
    //Cálculo da "média" baseado no sistema de avaliação da Unicsul...
    if(Number.isNaN(n1)){
        n1=0;
    }
    if(Number.isNaN(n2)){
        n2=0;
    }
    if(Number.isNaN(n3)){
        n3 = 0;
    }
    if(Number.isNaN(n4)){
        n4 = 0;
    }
    Number(n1);
    Number(n2);
    Number(n3);
    Number(n4);
    var media = n1+n2+n3+n4;
    console.log(media);
    return media;
}

function verificaConceito(m){
    var conceito;
    if (m>=6){
        conceito = "Aprovado";
    }else if(m<6 && m>=3){
        conceito = "Exame";
    }else{
        conceito="Reprovado";
    }
    return conceito;
}

    
    


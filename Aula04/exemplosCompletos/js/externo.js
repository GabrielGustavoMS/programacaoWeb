//exemplos de funções sem retorno
function mostraTriplo(valor){
    var triplo, area;
    triplo = valor*3;
    area = document.getElementById("texto1");
    area.innerHTML += triplo;
}
function calculaMedia(n1,n2,n3){
    var media, area;
    media=(n1+n2+n3)/3;
    area = document.getElementById("texto2");
    area.innerHTML += media.toFixed(3);
}
//funções com retorno
function somaValores(valor1, valor2){
    var soma;
    soma = valor1+valor2;
    return soma;
}

function areaTriangulo(base, altura){
    return base*altura/2;
}
function retornaMsg(){
    return "Exemplo com evento onclick";
}


